import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NasaApiService {
  private readonly API_KEY = 'here-is-api-key'; // Replace with your key
  private readonly BASE_URL = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getApod(date?: string): Observable<any> {
    let url = `${this.BASE_URL}?api_key=${this.API_KEY}`;
    if (date) {
      url += `&date=${date}`;
    }
    return this.http.get(url);
  }
}
