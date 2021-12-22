import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Country } from '../shared/country.model';
import { Observable } from 'rxjs';
import { CountryService } from '../shared/country.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<Country> {

  constructor(
    private countryService: CountryService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country> {
    const countryCode = <string>route.params['code'];
    return this.countryService.fetchCountry(countryCode);
  }
}
