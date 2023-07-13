import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyStartedComponent } from './why-started.component';

describe('WhyStartedComponent', () => {
  let component: WhyStartedComponent;
  let fixture: ComponentFixture<WhyStartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyStartedComponent]
    });
    fixture = TestBed.createComponent(WhyStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
