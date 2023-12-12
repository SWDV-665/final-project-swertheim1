import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubtractionPage } from './subtraction.page';

describe('SubtractionPage', () => {
  let component: SubtractionPage;
  let fixture: ComponentFixture<SubtractionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubtractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
