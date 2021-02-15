import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryServiceService } from './country-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { AddCountryComponent } from './add-country/add-country.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DialogExampleComponent,
    UpdateCountryComponent,
    AddCountryComponent
  ],
  entryComponents: [DialogExampleComponent,UpdateCountryComponent,AddCountryComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
    
  ],

  providers: [CountryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



