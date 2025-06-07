import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApodEntity } from '../../domain/entities/apod.entity';
import { ApodRepository } from '../../domain/repositories/apod.repository';
import { NasaApiService } from '../../../../core/services/nasa-api.service';

@Injectable()
export class ApodRepositoryImpl implements ApodRepository {
  constructor(private nasaApi: NasaApiService) {}

  fetchApod(date?: string): Observable<ApodEntity> {
    return this.nasaApi.getApod(date).pipe(
      map((res: any) => ({
        date: res.date,
        explanation: res.explanation,
        media_type: res.media_type,
        title: res.title,
        url: res.url,
      }))
    );
  }
}
