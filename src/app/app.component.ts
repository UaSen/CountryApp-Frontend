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

  
    // openDialog(id:number,countryName:String){
     
    //   var resultRef=this.form.open(DialogExampleComponent,{data:{name:countryName}});
  
    //    resultRef.afterClosed().subscribe(result => {
    //     if(result === "true"){
    //       this.onDeleteCountry(id);
    //     }
    //   });
      
     
    // }
  
    // public onDeleteCountry(id: number): void {
     
    //   this.countryService.deleteCountry(id).subscribe(
    //     (response: void) => {
    //       console.log(response);
    //       this.getCountries();
    //     },
    //     (error: HttpErrorResponse) => {
    //       alert(error.message);
    //     }
    //   );
    // }
  
    // openUpdate(country:any){
  
    //   var id = country.id;
    //   var countryName = country.countryName;
    //   var continent = country.continent ;
    //   var capital = country.capital;
    //   var currency= country.currency;
    //   var island = country.island;
    //   var imageUrl = country.imageUrl;
  
    //  console.log('country details', country);
      
    //  var updateRef = this.form.open(UpdateCountryComponent,{data:{countrys:country}} );
  
    //  updateRef.afterClosed().subscribe(result => {
    //   // if(result === "true"){
    //   //   this.onDeleteCountry(id);                      {data:{countrys:country}}
    //   // }
    //   console.log('cresult details', result);
    //  // console.log('cresult name', result.countryName);
    // });
    // }
  
    // public onUpdateCountry(country: Country): void {
    //   this.countryService.updateCountry(country).subscribe(
    //     (response: Country) => {
    //       console.log(response);
    //       this.getCountries();
    //     },
    //     (error: HttpErrorResponse) => {
    //       alert(error.message);
    //     }
    //   );
    // }
  
    // public addCountryComponent!: AddCountryComponent;
  
    // openAdd(){
    //   var resultRef=this.form.open(AddCountryComponent);
    // }
 }

 
