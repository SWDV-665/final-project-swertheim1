import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionWithIntegersPage } from './addition-with-integers.page';

describe('AdditionWithIntegersPage', () => {
  let component: AdditionWithIntegersPage;
  let fixture: ComponentFixture<AdditionWithIntegersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdditionWithIntegersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
