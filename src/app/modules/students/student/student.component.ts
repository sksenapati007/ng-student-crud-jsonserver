import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from '../../shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit(){
  }

  createAndUpdate(currentStudent: Student) {
    console.log(currentStudent);
    if(currentStudent.id != 0){
      console.log('update');
      this.updateStudent(currentStudent);
    }else{
      console.log('create');
      this.createStudent(currentStudent);
    }

  }

  createStudent(stud:Student){
    this.studentService.createStudent(stud).subscribe((result: Student)=>{
      this.studentService.getAllStudents();
      this.clear();
    });
  }
  updateStudent(stud:Student){
    this.studentService.updateStudent(stud).subscribe((result: Student)=>{
      this.studentService.getAllStudents();
      this.clear();
    });
  }

  clear(){
    this.studentService.currentStudent={
      id:0,
      firstName: '',
      lastName: '',
      degree: '',
      contact: 0,
      address: ''
    }
  }

}
