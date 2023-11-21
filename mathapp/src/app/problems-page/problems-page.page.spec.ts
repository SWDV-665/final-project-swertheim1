import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProblemsPagePage } from './problems-page.page';

describe('ProblemsPagePage', () => {
  let component: ProblemsPagePage;
  let fixture: ComponentFixture<ProblemsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProblemsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
