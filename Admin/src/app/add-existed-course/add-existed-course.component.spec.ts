import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExistedCourseComponent } from './add-existed-course.component';

describe('AddExistedCourseComponent', () => {
  let component: AddExistedCourseComponent;
  let fixture: ComponentFixture<AddExistedCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExistedCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExistedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
