import { Component, OnInit } from '@angular/core';
import { cscStudents } from '../cscStudents';
import { cscCourses } from '../cscStudents';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit
{
  private selectedStudent: Student;
  constructor( private studentService: StudentService,  )
  {
      this.selectedStudent = this.studentService.getSelectedStudent();
  }

  ngOnInit()
  {
    this.selectedStudent = this.studentService.getSelectedStudent();
  }
  getSelectedStudent(): Student
  {
    return this.studentService.getSelectedStudent();
  }
}
