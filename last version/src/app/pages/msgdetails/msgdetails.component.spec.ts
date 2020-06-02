import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgdetailsComponent } from './msgdetails.component';

describe('MsgdetailsComponent', () => {
  let component: MsgdetailsComponent;
  let fixture: ComponentFixture<MsgdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
