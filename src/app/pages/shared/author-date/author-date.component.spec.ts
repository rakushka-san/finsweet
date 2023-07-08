import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDateComponent } from './author-date.component';

describe('AuthorDateComponent', () => {
  let component: AuthorDateComponent;
  let fixture: ComponentFixture<AuthorDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorDateComponent]
    });
    fixture = TestBed.createComponent(AuthorDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
