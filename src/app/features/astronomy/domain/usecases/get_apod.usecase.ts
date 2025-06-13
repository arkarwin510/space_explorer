import { Observable } from 'rxjs';
import { ApodEntity } from '../entities/apod.entity';
import { ApodRepository } from '../repositories/apod.repository';

export class GetApodUseCase {
  constructor(private repository: ApodRepository) {}

  execute(date?: string): Observable<ApodEntity> {
    return this.repository.fetchApod(date);
  }
}
