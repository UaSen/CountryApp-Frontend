import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import * as module from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CountryServiceService } from '../country-service.service';
import { Country } from '../country';
import { MatDialogRef } from '@angular/material/dialog';
//import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent{

   public countries: Country[] = [];
   public addCount !:Country;
   country!:Country;


  constructor(public dialogRef: MatDialogRef<AddCountryComponent>,@Inject(module.MAT_DIALOG_DATA) public data: any,public countryService:CountryServiceService) { }


  ngOnInit(): void {
     this.getCountries();
  }

  public getCountries(): void {
    this.countryService.getCountries().subscribe(
      (response: Country[]) => {
        this.countries = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
   }


 onSubmit(form: NgForm): void {
 // this.onAddCountry(form.value);
 // this.countryService.addCountry(form.value);
 
  this.countryService.addCountry(form.value).subscribe(
   (response: Country) => {
     console.log(response);
     this.getCountries();
    
   },
   (error: HttpErrorResponse) => {
     alert(error.message);
    
   }
 );
 }

//  public onAddCountry(country: Country): void {
  
//  this.countryService.addCountry(country).subscribe(
//    (response: Country) => {
//      console.log(response);
//      this.getCountries();
    
//    },
//    (error: HttpErrorResponse) => {
//      alert(error.message);
    
//    }
//  );
// }


// onSubmit(form: NgForm): void {
//   // this.onAddCountry(form.value);
//  }

// formControl = new FormControl('', [
//   Validators.required
//   // Validators.email,
// ]);

// getErrorMessage() {
//   return this.formControl.hasError('required') ? 'Required field' :
//     this.formControl.hasError('email') ? 'Not a valid email' :
//       '';
// }

// submit() {
// // emppty stuff
// }

// onNoClick(): void {
//   this.dialogRef.close();
// }

// public confirmAdd(): void {
//   this.countryService.addCountry(this.country);
// }

}
