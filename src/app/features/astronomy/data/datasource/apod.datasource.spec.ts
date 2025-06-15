import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApodRepositoryImpl } from './apod.datasource';
import { NasaApiService } from '../../../../core/services/nasa-api.service';
import { ApodEntity } from '../../domain/entities/apod.entity';
import { NgZone, ɵNoopNgZone } from '@angular/core';

describe('ApodRepositoryImpl', () => {
  let repository: ApodRepositoryImpl;
  let nasaApiServiceSpy: jasmine.SpyObj<NasaApiService>;

  const mockApiResponse = {
    date: '2023-01-01',
    explanation: 'Test explanation',
    media_type: 'image',
    title: 'Test Title',
    url: 'https://example.com/test.jpg',
    hdurl: 'https://example.com/test-hd.jpg',
    copyright: 'Test Author',
  };

  const expectedApodEntity: ApodEntity = {
    date: '2023-01-01',
    explanation: 'Test explanation',
    media_type: 'image',
    title: 'Test Title',
    url: 'https://example.com/test.jpg',
  };

  beforeEach(() => {
    nasaApiServiceSpy = jasmine.createSpyObj('NasaApiService', ['getApod']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApodRepositoryImpl,
        { provide: NasaApiService, useValue: nasaApiServiceSpy },
        { provide: NgZone, useClass: ɵNoopNgZone },
      ],
    });

    repository = TestBed.inject(ApodRepositoryImpl);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });

  it('should fetch APOD and map to ApodEntity', (done) => {
    nasaApiServiceSpy.getApod.and.returnValue(of(mockApiResponse));

    repository.fetchApod().subscribe((result) => {
      expect(result).toEqual(expectedApodEntity);
      expect(nasaApiServiceSpy.getApod).toHaveBeenCalledWith(undefined);
      done();
    });
  });

  it('should pass date to getApod() when provided', (done) => {
    const testDate = '2023-01-02';
    nasaApiServiceSpy.getApod.and.returnValue(of(mockApiResponse));

    repository.fetchApod(testDate).subscribe((result) => {
      expect(result).toEqual(expectedApodEntity);
      expect(nasaApiServiceSpy.getApod).toHaveBeenCalledWith(testDate);
      done();
    });
  });

  it('should handle API errors', (done) => {
    const testError = { status: 500, message: 'Server error' };
    nasaApiServiceSpy.getApod.and.returnValue(throwError(() => testError));

    repository.fetchApod().subscribe({
      next: () => fail('Should have errored'),
      error: (err) => {
        expect(err).toEqual(testError);
        done();
      }
    });
  });
});
