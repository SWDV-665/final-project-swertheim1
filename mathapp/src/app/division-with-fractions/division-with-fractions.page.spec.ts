import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionWithFractionsPage } from './division-with-fractions.page';

describe('DivisionWithFractionsPage', () => {
  let component: DivisionWithFractionsPage;
  let fixture: ComponentFixture<DivisionWithFractionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionWithFractionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
