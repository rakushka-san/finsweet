import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyHeadingComponent } from './privacy-heading.component';

describe('PrivacyHeadingComponent', () => {
  let component: PrivacyHeadingComponent;
  let fixture: ComponentFixture<PrivacyHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyHeadingComponent]
    });
    fixture = TestBed.createComponent(PrivacyHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
