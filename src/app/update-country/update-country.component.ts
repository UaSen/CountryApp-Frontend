import { Component, OnInit, Inject } from '@angular/core';
import * as module from '@angular/material/dialog';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Country } from '../country';
import { CountryServiceService } from '../country-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {

  constructor(@Inject(module.MAT_DIALOG_DATA) public data: any,public countryService:CountryServiceService) { }

  public countries: Country[] = [];
  countrys :Country = this.data.name;

    
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
 this.onUpdateCountry(form.value);
 
}


public onUpdateCountry(country: Country): void {
 country.id = this.countrys.id;
this.countryService. updateCountry(country).subscribe(
  (response: Country) => {
    console.log(response);
    this.getCountries();
   
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
   
  }
);
}



}
