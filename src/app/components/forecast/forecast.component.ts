import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
forecastData: any

  constructor(private forecastService: ForecastService) { }

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
