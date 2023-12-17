import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionWithDecimalsPage } from './division-with-decimals.page';

describe('DivisionWithDecimalsPage', () => {
  let component: DivisionWithDecimalsPage;
  let fixture: ComponentFixture<DivisionWithDecimalsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionWithDecimalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
