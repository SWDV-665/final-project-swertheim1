import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProblemsPageComponent } from './problems-page.page';

describe('ProblemsPagePage', () => {
  let component: ProblemsPageComponent;
  let fixture: ComponentFixture<ProblemsPageComponent>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProblemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
