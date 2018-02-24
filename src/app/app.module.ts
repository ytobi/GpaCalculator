import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { AppComponent } from './app.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentGpaHomeComponent } from './student-gpa-home/student-gpa-home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: StudentGpaHomeComponent },
  { path: 'student-page', component: StudentPageComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentGpaHomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
