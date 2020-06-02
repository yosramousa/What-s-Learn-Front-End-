import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchildcategoryComponent } from './addchildcategory.component';

describe('AddchildcategoryComponent', () => {
  let component: AddchildcategoryComponent;
  let fixture: ComponentFixture<AddchildcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchildcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchildcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
