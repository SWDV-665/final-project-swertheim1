import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubtractionWithDecimalsPage } from './subtraction-with-decimals.page';

describe('SubtractionWithDecimalsPage', () => {
  let component: SubtractionWithDecimalsPage;
  let fixture: ComponentFixture<SubtractionWithDecimalsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubtractionWithDecimalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
