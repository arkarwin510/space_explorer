import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable({ providedIn: 'root' })
export class NasaApiService {
  private readonly BASE_URL = 'https://api.nasa.gov/planetary/apod';
  private readonly API_KEY: string;

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.API_KEY = configService.apiKey;
  }

  getApod(date?: string): Observable<any> {
    let url = `${this.BASE_URL}?api_key=${this.API_KEY}`;
    if (date) {
      url += `&date=${date}`;
    }
    return this.http.get(url);
  }
}
