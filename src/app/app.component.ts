import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Country } from './country';
import { CountryServiceService } from './country-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  form: any;

   constructor(private countryService:CountryServiceService) { }

   public countries: Country[] = [];
   public deleteCountry!: Country;
   public editCountry!: Country;
  
  
    ngOnInit() {
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

 }

 
