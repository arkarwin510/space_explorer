import { Observable } from 'rxjs';
import { ApodEntity } from '../entities/apod.entity';

export interface ApodRepository {
  fetchApod(date?: string): Observable<ApodEntity>;
}
