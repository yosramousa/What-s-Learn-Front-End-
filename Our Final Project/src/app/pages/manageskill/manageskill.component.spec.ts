import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageskillComponent } from './manageskill.component';

describe('ManageskillComponent', () => {
  let component: ManageskillComponent;
  let fixture: ComponentFixture<ManageskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
