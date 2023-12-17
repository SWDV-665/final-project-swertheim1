import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionWithWholeNumbersPage } from './division-with-whole-numbers.page';

describe('DivisionWithWholeNumbersPage', () => {
  let component: DivisionWithWholeNumbersPage;
  let fixture: ComponentFixture<DivisionWithWholeNumbersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionWithWholeNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
