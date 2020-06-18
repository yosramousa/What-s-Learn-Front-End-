import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentrequestComponent } from './enrollmentrequest.component';

describe('EnrollmentrequestComponent', () => {
  let component: EnrollmentrequestComponent;
  let fixture: ComponentFixture<EnrollmentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
