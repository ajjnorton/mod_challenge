import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';



import {
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
} from '@angular/material';



@NgModule({
  imports: [],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule,
    CdkTableModule
   
  ],
  declarations: []
})
export class AngularMaterialModule { }
