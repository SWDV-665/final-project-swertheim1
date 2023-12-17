import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubtractionWithIntegersPage } from './subtraction-with-integers.page';

describe('SubtractionWithIntegersPage', () => {
  let component: SubtractionWithIntegersPage;
  let fixture: ComponentFixture<SubtractionWithIntegersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubtractionWithIntegersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a problem with correct numbers and at least one negative', () => {
    component.generateProblem();

    // Check if the generated numbers are within the expected range
    expect(component.randomNumber1).toBeGreaterThanOrEqual(component.MIN_ONE);
    expect(component.randomNumber1).toBeLessThanOrEqual(component.MAX_ONE);

    expect(component.randomNumber2).toBeGreaterThanOrEqual(component.MIN_TWO);
    expect(component.randomNumber2).toBeLessThanOrEqual(component.MAX_TWO);

    // Check if at least one number is negative
    const atLeastOneIsNegative = component.randomNumber1 < 0 || component.randomNumber2 < 0;
    expect(atLeastOneIsNegative).toBeTrue();

    
  });

  
});
