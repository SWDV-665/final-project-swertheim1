import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionWithWholeNumbersPage } from './addition-with-whole-numbers.page';

describe('AdditionWithWholeNumbersPage', () => {
  let component: AdditionWithWholeNumbersPage;
  let fixture: ComponentFixture<AdditionWithWholeNumbersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdditionWithWholeNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
