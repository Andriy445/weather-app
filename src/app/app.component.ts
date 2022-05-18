import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherservice: WeatherService){}
  weatherData: WeatherData | undefined
  cityName: string  = 'Kyiv'
  onSubmit(){
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }
  private getWeatherData(city:string){
    this.weatherservice.getWeather(city).subscribe(response => this.weatherData = response)
  }
  
  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }
 
}
