import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomyView } from './astronomy-view';

describe('AstronomyView', () => {
  let component: AstronomyView;
  let fixture: ComponentFixture<AstronomyView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronomyView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronomyView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
