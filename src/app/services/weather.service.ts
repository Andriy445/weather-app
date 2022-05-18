import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherData>{
   return this.http.get<WeatherData>(environment.baseURL, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostName, environment.XRapidAPIValue)
      .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
      params: new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}
