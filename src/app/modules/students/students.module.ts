import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from '../shared/student.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    StudentComponent,
    StudentListComponent
  ],
  providers:[StudentService]
})
export class StudentsModule { }
