import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoaderComponent } from './ui/loader/loader.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found.component';
import { ManageCountriesComponent } from './manage-countries/manage-countries.component';
import { CountryNotSelectedComponent } from './manage-countries/country-not-selected.component';
import { CountryDetailsComponent } from './manage-countries/country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    PageNotFoundComponent,
    ManageCountriesComponent,
    CountryNotSelectedComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
