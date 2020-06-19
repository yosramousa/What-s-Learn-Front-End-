import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcertificateComponent } from './imgcertificate.component';

describe('ImgcertificateComponent', () => {
  let component: ImgcertificateComponent;
  let fixture: ComponentFixture<ImgcertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgcertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
