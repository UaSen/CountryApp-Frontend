// import { Component, NgModule, OnInit } from '@angular/core';
// import { map } from 'rxjs/operators';
// import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
// import { CountryServiceService } from '../country-service.service';
// import { Country } from '../country';
// import { HttpErrorResponse } from '@angular/common/http';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
// import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
// import { UpdateCountryComponent } from '../update-country/update-country.component';
// import { AddCountryComponent } from '../add-country/add-country.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { NgForm } from '@angular/forms';



// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit{
//   /** Based on the screen size, switch from standard to one column per row */
//  // countries = this.appComponent.getCountries();

//  public countries: Country[] = [];
//  public deleteCountry!: Country;
//  public editCountry!: Country;
//  countrys !: Country;


//   ngOnInit() {
//     this.getCountries();
//   }

//   public getCountries(): void {
//    this.countryService.getCountries().subscribe(
//      (response: Country[]) => {
//        this.countries = response;
//      },
//      (error: HttpErrorResponse) => {
//        alert(error.message);
//      }
//    );
//   }

//   cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
//     map(({ matches }) => {
//       if (matches) {
//         return [
//           { title: 'Card 1', cols: 1, rows: 1 },
//           { title: 'Card 2', cols: 1, rows: 1 },
//           { title: 'Card 3', cols: 1, rows: 1 },
//           { title: 'Card 4', cols: 1, rows: 1 }
//         ];
//       }

//       return [
//         { title: 'Card 1', cols: 2, rows: 1 },
//         { title: 'Card 2', cols: 1, rows: 1 },
//         { title: 'Card 3', cols: 1, rows: 1 },
//         { title: 'Card 4', cols: 1, rows: 1 }

        
//       ];
//     })
//   );

//   openDialog(id:number,countryName:String){
   
//     var resultRef=this.form.open(DialogExampleComponent,{data:{name:countryName}});

//      resultRef.afterClosed().subscribe(result => {
//       if(result === "true"){
//         this.onDeleteCountry(id);
//       }
//     });
    
   
//   }

//   public onDeleteCountry(id: number): void {
   
//     this.countryService.deleteCountry(id).subscribe(
//       (response: void) => {
//         console.log(response);
//         this.getCountries();
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }

//   openUpdate(country:any){

//     var id = country.id;
//     var countryName = country.countryName;
//     var continent = country.continent ;
//     var capital = country.capital;
//     var currency= country.currency;
//     var island = country.island;
//     var imageUrl = country.imageUrl;

//    console.log('country details', country);
    
//    var updateRef = this.form.open(UpdateCountryComponent,{data:{countrys:country}} );

//    updateRef.afterClosed().subscribe(result => {
//     // if(result === "true"){
//     //   this.onDeleteCountry(id);                      {data:{countrys:country}}
//     // }
//     console.log('cresult details', result);
//    // console.log('cresult name', result.countryName);
//   });
//   }

//   public onUpdateCountry(country: Country): void {
//     this.countryService.updateCountry(country).subscribe(
//       (response: Country) => {
//         console.log(response);
//         this.getCountries();
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }

//   public addCountryComponent!: AddCountryComponent;

//   openAdd(){
//     var resultRef=this.form.open(AddCountryComponent);
//   }



//   constructor(private breakpointObserver: BreakpointObserver,private countryService:CountryServiceService,public form: MatDialog) {}
// }



