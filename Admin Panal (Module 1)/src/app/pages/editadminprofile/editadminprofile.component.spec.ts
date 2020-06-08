import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminprofileComponent } from './editadminprofile.component';

describe('EditadminprofileComponent', () => {
  let component: EditadminprofileComponent;
  let fixture: ComponentFixture<EditadminprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadminprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
