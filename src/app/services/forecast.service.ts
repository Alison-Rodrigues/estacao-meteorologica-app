import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlForecast = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/4371/days/15?token='
const token = '0840836acc1d29f717d8e01593f84808'

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  forecast(): Observable<any> {
    return this.http.get(`${urlForecast}${token}`)
  }
}
