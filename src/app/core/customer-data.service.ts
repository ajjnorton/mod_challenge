import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ICustomer } from '../shared/models/customer';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(public http: Http) { }

  getCustomers() {
    return this.http.get('./assets/results.json')
      .map(Response => {
        return Response.json().content;
      });
  }
}
