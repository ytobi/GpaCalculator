import { Component, OnInit } from '@angular/core';
import { cscStudents } from '../cscStudents';
import { cscCourses } from '../cscStudents';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-gpa-home',
  templateUrl: './student-gpa-home.component.html',
  styleUrls: ['./student-gpa-home.component.css']
})
export class StudentGpaHomeComponent implements OnInit {

  private cscStudents: Student[];
  private bestMatch: Student[] = [];
  private selectedStudent: Student = null;
  private found = 0;

  constructor( private studentService: StudentService )
  {
    this.cscStudents = studentService.getcscStudents();
  }

  public displayMatch( searchValue )
  {
    this.bestMatch = [];
    this.found = 0;
    if( searchValue !== '' )
    {
      for( let i = 0; i < cscStudents.length; i++ )
      {
        if ( cscStudents[i].getName().toLowerCase().match(searchValue.toLowerCase()) )
        {
          this.bestMatch[this.found++] = cscStudents[i];
        }
      }
    }
  }
  public getSelectedStudent(): Student
  {
    console.log( this.selectedStudent.getCourses() );
     return this.studentService.getSelectedStudent();
  }
  public setSelectedStudent( student )
  {
    this.studentService.setSelectedStudent( student );
  }
  public getBestMatch(): Student[]
  {
    return this.bestMatch;
  }

  ngOnInit() {
  }

}
