import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCountryComponent } from '../add-country/add-country.component';
import { Country } from '../country';
import { CountryServiceService } from '../country-service.service';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { UpdateCountryComponent } from '../update-country/update-country.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public countries: Country[] = [];
  public country : Country[]=[];

  constructor(private countryService:CountryServiceService,public form: MatDialog) {

  }
  ngOnInit(): void {
    this.getCountries();
  }

    public getCountries(): void {
   this.countryService.getCountries().subscribe(
     (response: Country[]) => {
       this.countries = response;
       console.log(this.countries);
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
   );

  }

  openAdd(){
    this.form.open(AddCountryComponent);

  }

    openDelete(id:number,countryName:String){
   
    var resultRef=this.form.open(DialogExampleComponent,{data:{name:countryName}});

     resultRef.afterClosed().subscribe(result => {
      if(result === "true"){
        this.onDeleteCountry(id);
      }
    });
    
   
  }

  public onDeleteCountry(id: number): void {
   
    this.countryService.deleteCountry(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getCountries();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  openUpdate(countrys:any){
console.log("update",countrys);
  this.form.open(UpdateCountryComponent,{data:{name:countrys}});

  }

  public onUpdateCountry(country: Country): void {
    this.countryService.updateCountry(country).subscribe(
      (response: Country) => {
        console.log(response);
        this.getCountries();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  displayedColumns: string[] = ['imageUrl', 'countryName', 'continent', 'capital','currency','island','edit','delete'];
  dataSource = this.countryService.getCountries();
  

}


