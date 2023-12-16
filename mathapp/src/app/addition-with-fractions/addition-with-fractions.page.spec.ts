import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionWithFractionsPage } from './addition-with-fractions.page';

describe('AdditionWithFractionsPage', () => {
  let component: AdditionWithFractionsPage;
  let fixture: ComponentFixture<AdditionWithFractionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdditionWithFractionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
