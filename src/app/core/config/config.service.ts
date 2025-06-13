import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor() {
    if (!environment.nasaApiKey) {
      throw new Error('NASA API key is not configured in environment.ts');
    }
  }

  get apiKey(): string {
    return environment.nasaApiKey;
  }
}
