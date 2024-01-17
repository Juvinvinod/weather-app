import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 URL = 'https://api.openweathermap.org/data/2.5/weather?q='
  constructor(private readonly httpClientModule:HttpClient) {
   }

   fetchData(cityName:string){
    return this.httpClientModule.get(
      `${this.URL}${cityName}&appid=${environment.API_KEY}&units=metric`
      )
   }
}
