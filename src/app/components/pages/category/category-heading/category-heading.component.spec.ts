import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHeadingComponent } from './category-heading.component';

describe('CategoryHeadingComponent', () => {
  let component: CategoryHeadingComponent;
  let fixture: ComponentFixture<CategoryHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryHeadingComponent]
    });
    fixture = TestBed.createComponent(CategoryHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
