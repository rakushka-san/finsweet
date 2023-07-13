import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHeadingComponent } from './about-us-heading.component';

describe('AboutUsHeadingComponent', () => {
  let component: AboutUsHeadingComponent;
  let fixture: ComponentFixture<AboutUsHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsHeadingComponent]
    });
    fixture = TestBed.createComponent(AboutUsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
