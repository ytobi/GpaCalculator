
import { Student, Course } from './student';

let csc207: Course = null;
let csc301: Course = null;
let csc419: Course = null;
let csc205: Course = null;
let csc208: Course = null;
let epy203: Course = null;
let mat203: Course = null;

csc207 = new  Course( 'Introduction to  algorithms', 'CSC207', 0, 6 );
csc301 = new  Course( 'Data structures and algoritms', 'CSC301', 0, 6 );
csc419 = new  Course( 'Process Algebra', 'CSC419', 0, 6 );
csc205 = new  Course( 'Introduction to Computer Science', 'CSC207', 0, 4 );
csc208 = new  Course( 'Programing in C and Python', 'CSC207', 0, 6 );

mat203 = new Course( 'Math Course 203', 'MAT203', 0, 6 );

epy203 = new Course( 'Probability and Satistic', 'EPY203', 0, 4 );

export let cscCourses: Course[] = [ null ];
export let matCourses: Course[] = [ null ];
export let cscStudents: Student[] = [ null ];

cscCourses[0] = csc207;
cscCourses[1] = csc205;
cscCourses[2] = csc301;
cscCourses[3] = csc419;
cscCourses[4] = csc208;
cscCourses[5] = epy203;

cscStudents[0] = new Student( 'Tobi Obadiah', 'Computer Science', cscCourses );
cscStudents[1] = new Student( 'Bill Gates', 'Computer Science', cscCourses );
cscStudents[2] = new Student( 'Charlse Babage', 'Computer Science', cscCourses );
cscStudents[3] = new Student( 'Steve Jobs', 'Computer Science', cscCourses );
cscStudents[4] = new Student( 'John Deo', 'Mathematics', cscCourses );
