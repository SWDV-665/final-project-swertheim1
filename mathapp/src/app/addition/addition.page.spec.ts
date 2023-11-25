import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionPage } from './addition.page';

describe('AdditionPage', () => {
  let component: AdditionPage;
  let fixture: ComponentFixture<AdditionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
