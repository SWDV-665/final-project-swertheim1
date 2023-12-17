import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionWithIntegersPage } from './division-with-integers.page';

describe('DivisionWithIntegersPage', () => {
  let component: DivisionWithIntegersPage;
  let fixture: ComponentFixture<DivisionWithIntegersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionWithIntegersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
