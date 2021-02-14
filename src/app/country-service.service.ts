import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {


  constructor(private http:HttpClient) {}

  public getCountries():Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:8080/rest/v2/all');
  }

  public addCountry(country: Country):Observable<Country> {
    return this.http.post<Country>('http://localhost:8080/rest/v2/add', country);
  }

  public updateCountry(country: Country):Observable<Country> {
    return this.http.put<Country>('http://localhost:8080/rest/v2/update', country);
  }

  public deleteCountry(countryId: number):Observable<void> {
    return this.http.delete<void>('http://localhost:8080/rest/v2/delete/${countryId}');
  }
}
