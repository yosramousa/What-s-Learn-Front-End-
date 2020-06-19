import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserSkillComponent } from './edit-user-skill.component';

describe('EditUserSkillComponent', () => {
  let component: EditUserSkillComponent;
  let fixture: ComponentFixture<EditUserSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
