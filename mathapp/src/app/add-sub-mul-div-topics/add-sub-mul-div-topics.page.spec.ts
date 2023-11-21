import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSubMulDivTopicsPage } from './add-sub-mul-div-topics.page';

describe('AddSubMulDivTopicsPage', () => {
  let component: AddSubMulDivTopicsPage;
  let fixture: ComponentFixture<AddSubMulDivTopicsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSubMulDivTopicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
