import { Injectable } from '@angular/core';
import { cscStudents } from './cscStudents';
import { cscCourses } from './cscStudents';
import { Student, Course } from './student';
import { AppComponent } from './app.component';

@Injectable()
export class StudentService
{
    private selectedStudent: Student = null;
    public getSelectedStudent(): Student
    {
      return this.selectedStudent;
    }
    public setSelectedStudent( student )
    {
      this.selectedStudent = student;
    }
    public getcscStudents(): Student[]
    {
      return cscStudents;
    }
    public getCourses(): Course[]
    {
      return cscCourses;
    }
}
