import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorHeadingComponent } from './author-heading.component';

describe('AuthorHeadingComponent', () => {
  let component: AuthorHeadingComponent;
  let fixture: ComponentFixture<AuthorHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorHeadingComponent]
    });
    fixture = TestBed.createComponent(AuthorHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
