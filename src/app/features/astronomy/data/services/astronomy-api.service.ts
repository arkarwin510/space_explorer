import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AstronomyPicture } from '../../domain/models/AstronomyPicture.model';

@Injectable({ providedIn: 'root' })
export class AstronomyApiService {
  private apiKey = 'RS7Se9xpAMSuhXwmUaYFnTUrgLPKsaENlgfhq0r3';
  private baseUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getPicture(): Observable<AstronomyPicture> {
    return this.http.get<AstronomyPicture>(`${this.baseUrl}?api_key=${this.apiKey}`);
  }
}