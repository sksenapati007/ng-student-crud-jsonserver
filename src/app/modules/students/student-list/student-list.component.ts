import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from '../../shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {

  constructor(public studentService: StudentService) {}

  ngOnInit(){
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents();
  }

  deleteStudent(id:number) {
    console.log(id);
    this.studentService.deleteStudent(id).subscribe(
      (data: Student)=>{
          this.getAllStudents();
      }
    )
  }

  updateStudent(stud:Student){
    this.studentService.currentStudent = Object.assign({}, stud);
  }
}
