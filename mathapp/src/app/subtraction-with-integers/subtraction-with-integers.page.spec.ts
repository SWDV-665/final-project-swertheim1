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
});
