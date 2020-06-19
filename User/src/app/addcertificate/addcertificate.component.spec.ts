import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcertificateComponent } from './addcertificate.component';

describe('AddcertificateComponent', () => {
  let component: AddcertificateComponent;
  let fixture: ComponentFixture<AddcertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
