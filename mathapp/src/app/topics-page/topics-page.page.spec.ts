import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicsPagePage } from './topics-page.page';

describe('TopicsPagePage', () => {
  let component: TopicsPagePage;
  let fixture: ComponentFixture<TopicsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TopicsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
