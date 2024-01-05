import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  cityName = 'calicut';
  data = {
    temp:'',
    feelsLike:'',
    pressure:'',
    humidity:'',
    city:'',
    main:'',
    imageURL:''
  }
  constructor(private readonly weatherService:WeatherService){}

  ngOnInit(): void {
      this.loadData();
  }

  loadData(){
    if(this.cityName){
      this.weatherService.fetchData(this.cityName).subscribe({
        next:(data:any) =>{
          this.data.temp = data.main.temp;
          this.data.feelsLike = data.main.feels_like;
          this.data.pressure = data.main.pressure;
          this.data.humidity = data.main.humidity;
          this.data.city = data.name;
          this.data.imageURL = data.weather[0].icon;
        },
        error:(err)=>{
          console.log('Error while fetching data',err);
          
        }
      })
    }
  }
}
