import { Component, OnInit } from '@angular/core';

import { ICustomer } from './shared/models/customer';
import { CustomerDataService } from './core/customer-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cds: CustomerDataService) { }

  customers: ICustomer[] = [];
  searchResult;
  searching: boolean;



  ngOnInit() {
    this.getData();
  }



  /**
   * Get the JSON data and map it to our customers array
   * 
   * @memberof AppComponent
   */
  getData() {
    this.searchingData();
    this.cds.getCustomers()
      .subscribe(response => {
        this.customers = response.map(custData => {
          const customer: ICustomer = {
            accountId: custData.id,
            customerId: custData.customerId,
            currency: custData.currency,
            accountName: custData.name,
            accountNumber: custData.identifiers[0].accountNumber,
            sortCode: custData.identifiers[0].sortCode,
            balance: custData.balance,
            status: custData.status
          };
          return customer;
        });
      });
  }

  onSearch(textArgs) {
    //console.log("hello " + textArgs.data);
    this.searchingData();
    if (!textArgs.data) {
      console.log('get data');
      this.getData();
    }
    this.customers = this.customers.filter(custData => {
      if (custData.accountName.includes(textArgs.data) || custData.accountId.includes(textArgs.data)) {
        return custData;
      }
    });
    console.log(this.searchResult);
  }

  searchingData() {
    setTimeout(() => {
      this.searching = true;
    }, 1000);
    this.searching = false;
  }
}




