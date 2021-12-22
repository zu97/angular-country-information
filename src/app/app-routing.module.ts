import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { CountryNotSelectedComponent } from './manage-countries/country-not-selected.component';
import { CountryDetailsComponent } from './manage-countries/country-details/country-details.component';
import { CountryResolverService } from './manage-countries/country-resolver.service';

const routes: Routes = [
  {path: '', component: CountryNotSelectedComponent},
  {path: 'country/:code', component: CountryDetailsComponent, resolve: {
    country: CountryResolverService
  }},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
