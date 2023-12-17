import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FallbackPage } from './fallback.page';

describe('FallbackPage', () => {
  let component: FallbackPage;
  let fixture: ComponentFixture<FallbackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FallbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
