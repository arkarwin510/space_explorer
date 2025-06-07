import { Component, OnInit } from '@angular/core';
import { ApodEntity } from '../../domain/entities/apod.entity';
import { GetApodUseCase } from '../../domain/usecases/get_apod.usecase';
import { ApodRepositoryImpl } from '../../data/datasource/apod.datasource';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-astronomy',
  templateUrl: './astronomy.component.html',
  styleUrls: ['./astronomy.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [
    ApodRepositoryImpl,
    {
      provide: GetApodUseCase,
      useFactory: (repo: ApodRepositoryImpl) => new GetApodUseCase(repo),
      deps: [ApodRepositoryImpl]
    }
  ]
})
export class AstronomyComponent implements OnInit {
  apod?: ApodEntity;
  selectedDate?: string;

  constructor(private getApodUseCase: GetApodUseCase) {}

  ngOnInit(): void {
    this.getApod();
  }

  getApod() {
    this.getApodUseCase.execute(this.selectedDate).subscribe((data) => {
      this.apod = data;
    });
  }
}
