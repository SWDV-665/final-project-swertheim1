import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicationWithDecimalsPage } from './multiplication-with-decimals.page';

describe('MultiplicationWithDecimalsPage', () => {
  let component: MultiplicationWithDecimalsPage;
  let fixture: ComponentFixture<MultiplicationWithDecimalsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultiplicationWithDecimalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
