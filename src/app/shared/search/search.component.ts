import { Component, OnInit, Testability, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() btnclick = new EventEmitter();
  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.btnclick.emit({ data: this.searchText });
    this.searchText = null;

  }



}
