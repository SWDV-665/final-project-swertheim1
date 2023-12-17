import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicationWithFractionsPage } from './multiplication-with-fractions.page';

describe('MultiplicationWithFractionsPage', () => {
  let component: MultiplicationWithFractionsPage;
  let fixture: ComponentFixture<MultiplicationWithFractionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultiplicationWithFractionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
