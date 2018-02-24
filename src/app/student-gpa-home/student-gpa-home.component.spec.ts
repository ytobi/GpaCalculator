import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGpaHomeComponent } from './student-gpa-home.component';

describe('StudentGpaHomeComponent', () => {
  let component: StudentGpaHomeComponent;
  let fixture: ComponentFixture<StudentGpaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGpaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGpaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
