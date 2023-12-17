import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubtractionWithFractionsPage } from './subtraction-with-fractions.page';

describe('SubtractionWithFractionsPage', () => {
  let component: SubtractionWithFractionsPage;
  let fixture: ComponentFixture<SubtractionWithFractionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubtractionWithFractionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
