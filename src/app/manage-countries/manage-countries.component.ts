import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from '../shared/country.model';
import { Subscription } from 'rxjs';
import { CountryService } from '../shared/country.service';

@Component({
  selector: 'app-manage-countries',
  templateUrl: './manage-countries.component.html',
  styleUrls: ['./manage-countries.component.css']
})
export class ManageCountriesComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  isLoading = true;

  countriesChangeSubscription!: Subscription;
  countriesFetchingSubscription!: Subscription;

  constructor(
    private countryService: CountryService,
  ) {}

  ngOnInit(): void {
    this.countriesChangeSubscription = this.countryService.onCountriesChange.subscribe(countries => {
      this.countries = countries;
    });

    this.countriesFetchingSubscription = this.countryService.onCountriesFetch.subscribe(isLoading => {
      this.isLoading = isLoading;
    });

    this.countryService.fetchCountries();
  }

  ngOnDestroy(): void {
    this.countriesChangeSubscription.unsubscribe();
    this.countriesFetchingSubscription.unsubscribe();
  }

}
