import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerDataService } from './core/customer-data.service';
import { AngularMaterialModule } from './shared/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {SearchComponent} from './shared/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [CustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
