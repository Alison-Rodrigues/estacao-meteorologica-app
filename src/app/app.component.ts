import { Component, OnInit } from '@angular/core';
import { ForecastService } from './services/forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forecastData: any;
  title = 'MeteoClima'

  constructor(private forecastService: ForecastService) {}
  ngOnInit(): void {
    this.forecast()
  }

  forecast(): void {
    this.forecastService.forecast()
    .subscribe(
      data => {
        this.forecastData = data
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }
}


