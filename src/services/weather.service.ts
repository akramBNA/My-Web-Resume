import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = environment.OPEN_WEATHER_API_KEY;
  private apiUrl = environment.OPEN_WEATHER_API_URL;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`);
  }
}
