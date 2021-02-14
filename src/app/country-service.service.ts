import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(private http:HttpClient) { }

  public getCountries():Observable<Country[]> {
    return this.http.get<Country[]>('${this.apiServerUrl}/country/all');
  }

  public addCountry(country: Country):Observable<Country> {
    return this.http.post<Country>('${this.apiServerUrl}/country/add', country);
  }

  public updateCountry(country: Country):Observable<Country> {
    return this.http.put<Country>('${this.apiServerUrl}/country/update', country);
  }

  public deleteCountry(countryId: number):Observable<void> {
    return this.http.delete<void>('${this.apiServerUrl}/country/delete/${countryId}');
  }
}
