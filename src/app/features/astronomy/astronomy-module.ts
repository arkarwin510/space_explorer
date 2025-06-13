import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodRepositoryImpl } from './data/datasource/apod.datasource';
import { GetApodUseCase } from './domain/usecases/get_apod.usecase';

import { AstronomyRoutingModule } from './astronomy-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AstronomyRoutingModule
  ],
  providers: [
    ApodRepositoryImpl,
    {
      provide: GetApodUseCase,
      useFactory: (repo: ApodRepositoryImpl) => new GetApodUseCase(repo),
      deps: [ApodRepositoryImpl]
    }
  ]
})
export class AstronomyModule { }
