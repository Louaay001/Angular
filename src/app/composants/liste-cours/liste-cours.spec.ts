import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ListeCours } from './liste-cours';

describe('ListeCours', () => {
  let component: ListeCours;
  let fixture: ComponentFixture<ListeCours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCours],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeCours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
