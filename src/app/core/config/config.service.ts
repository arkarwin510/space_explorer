import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../tokens/environment.token';

export interface Environment {
  production: boolean;
  nasaApiKey: string;
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(@Inject(ENVIRONMENT) private env: Environment) {
    if (!this.env?.nasaApiKey) {
      throw new Error('NASA API key is not configured in environment.ts');
    }
  }

  get apiKey(): string {
    return this.env.nasaApiKey;
  }
}
