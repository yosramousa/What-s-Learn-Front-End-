import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserdetailsComponent } from './edituserdetails.component';

describe('EdituserdetailsComponent', () => {
  let component: EdituserdetailsComponent;
  let fixture: ComponentFixture<EdituserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
