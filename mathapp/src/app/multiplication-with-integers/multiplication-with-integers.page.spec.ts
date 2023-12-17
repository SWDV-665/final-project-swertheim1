import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicationWithIntegersPage } from './multiplication-with-integers.page';

describe('MultiplicationWithIntegersPage', () => {
  let component: MultiplicationWithIntegersPage;
  let fixture: ComponentFixture<MultiplicationWithIntegersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultiplicationWithIntegersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
