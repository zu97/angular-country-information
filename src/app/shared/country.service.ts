import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Country } from './country.model';
import { map } from 'rxjs/operators';
import { CountryData } from './countryData.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries: Country[] = [];

  onCountriesChange = new Subject<Country[]>();
  onCountriesFetch = new Subject<boolean>();

  constructor(
    private http: HttpClient,
  ) {}

  getCountries(): Country[] {
    return this.countries.slice();
  }

  fetchCountries(): void {
    this.onCountriesFetch.next(true);
    this.http.get<Country[]>('http://146.185.154.90:8080/restcountries/rest/v2/all?fields=name;alpha3Code')
      .pipe(map(datas => {
        if (!datas) {
          return [];
        }

        return datas.map(data => {
          return new Country(data.name, data.alpha3Code);
        });
      }))
      .subscribe(countries => {
        this.countries = countries;

        this.onCountriesChange.next(this.getCountries());
        this.onCountriesFetch.next(false);
      }, () => {
        this.onCountriesFetch.next(false);
      })
  }

  fetchCountry(countryCode: string) {
    return this.http.get<CountryData>('http://146.185.154.90:8080/restcountries/rest/v2/alpha/' + countryCode)
      .pipe(map(data => {
        return new CountryData(data.name, data.alpha3Code, data.capital, data.region, data.population);
      }));
  }
}
