import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCategoryComponent } from './choose-category.component';

describe('ChooseCategoryComponent', () => {
  let component: ChooseCategoryComponent;
  let fixture: ComponentFixture<ChooseCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseCategoryComponent]
    });
    fixture = TestBed.createComponent(ChooseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
