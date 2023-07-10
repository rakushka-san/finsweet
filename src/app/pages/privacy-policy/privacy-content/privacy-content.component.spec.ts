import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyContentComponent } from './privacy-content.component';

describe('PrivacyContentComponent', () => {
  let component: PrivacyContentComponent;
  let fixture: ComponentFixture<PrivacyContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyContentComponent]
    });
    fixture = TestBed.createComponent(PrivacyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
