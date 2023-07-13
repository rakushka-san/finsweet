import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMinComponent } from './post-min.component';

describe('PostMinComponent', () => {
  let component: PostMinComponent;
  let fixture: ComponentFixture<PostMinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostMinComponent]
    });
    fixture = TestBed.createComponent(PostMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
