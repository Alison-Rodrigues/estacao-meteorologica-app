import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: 'index', component: WeatherComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'forecast', component: ForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
