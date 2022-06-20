import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;

  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {
    this.listCurrentWeather()
  }
  listCurrentWeather(): void {
    this.weatherService.currentWeather()
      .subscribe(
        data => {
          this.weatherData = data;
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
  }

}
