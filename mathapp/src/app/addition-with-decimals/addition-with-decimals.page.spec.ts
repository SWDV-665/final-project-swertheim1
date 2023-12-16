import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionWithDecimalsPage } from './addition-with-decimals.page';

describe('AdditionWithDecimalsPage', () => {
  let component: AdditionWithDecimalsPage;
  let fixture: ComponentFixture<AdditionWithDecimalsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdditionWithDecimalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
