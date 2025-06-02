import { Observable } from 'rxjs';
import { AstronomyPicture } from '../models/AstronomyPicture.model';

export abstract class GetAstronomyPictureUseCase {
  abstract execute(): Observable<AstronomyPicture>;
}