import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlCurrentWeather = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/4371/current?token='
const token = '0840836acc1d29f717d8e01593f84808'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  currentWeather(): Observable<any> {
    return this.http.get(`${urlCurrentWeather}${token}`)
  }
}
