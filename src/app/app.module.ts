import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoaderComponent } from './ui/loader/loader.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found.component';
import { ManageCountriesComponent } from './manage-countries/manage-countries.component';
import { CountryNotSelectedComponent } from './manage-countries/country-not-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    PageNotFoundComponent,
    ManageCountriesComponent,
    CountryNotSelectedComponent
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
