import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubtractionWithWholeNumbersPage } from './subtraction-with-whole-numbers.page';

describe('SubtractionWithWholeNumbersPage', () => {
  let component: SubtractionWithWholeNumbersPage;
  let fixture: ComponentFixture<SubtractionWithWholeNumbersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubtractionWithWholeNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
