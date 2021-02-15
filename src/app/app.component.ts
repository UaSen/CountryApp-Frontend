import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { CountryServiceService } from './country-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

   public countries: Country[] = [];
  //  public editCountry: Country;
  //  public deleteCountry: Country;

   constructor(private countryService:CountryServiceService) { }

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


  // public onAddCountry(addForm: MatFormFieldModule): void {
  //   document.getElementById('add-employee-form').click();
  //   this.employeeService.addEmployee(addForm.value).subscribe(
  //     (response: Country) => {
  //       console.log(response);
  //       this.getEmployees();
  //       addForm.reset();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.reset();
  //     }
  //   );
  // }

  // public onUpdateEmloyee(employee: Employee): void {
  //   this.employeeService.updateEmployee(employee).subscribe(
  //     (response: Employee) => {
  //       console.log(response);
  //       this.getEmployees();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
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

  // public searchEmployees(key: string): void {
  //   console.log(key);
  //   const results: Employee[] = [];
  //   for (const employee of this.employees) {
  //     if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
  //       results.push(employee);
  //     }
  //   }
  //   this.employees = results;
  //   if (results.length === 0 || !key) {
  //     this.getEmployees();
  //   }
  // }

  // public onOpenModal(country: Country, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addEmployeeModal');
  //   }
  //   // if (mode === 'edit') {
  //   //   this.editEmployee = employee;
  //   //   button.setAttribute('data-target', '#updateEmployeeModal');
  //   // }
  //   if (mode === 'delete') {
  //     this.deleteCountry = country;
  //     button.setAttribute('data-target', '#deleteCountryModal');
  //   }
  //   container.appendChild(button);
  //   button.click();
  // }
  
  }

 
