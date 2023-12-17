import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicationWithWholeNumbersPage } from './multiplication-with-whole-numbers.page';

describe('MultiplicationWithWholeNumbersPage', () => {
  let component: MultiplicationWithWholeNumbersPage;
  let fixture: ComponentFixture<MultiplicationWithWholeNumbersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultiplicationWithWholeNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
