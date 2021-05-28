import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class StudentService {
  Url = 'http://localhost:3004/students';

  allStudent!: Student[];

  currentStudent: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    degree: '',
    contact: 0,
    address: '',
  };
  constructor(private http: HttpClient) {}

  // Read
  getAllStudents() {
    return this.http
      .get<Student[]>(this.Url, headerOption)
      .subscribe((data: Student[]) => {
        this.allStudent = data;
      });
  }
  // Delete
  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.Url + '/' + id, headerOption);
  }
  // Create
  createStudent(stud: Student): Observable<Student> {
    return this.http.post<Student>(this.Url, stud, headerOption);
  }
  // Update
  updateStudent(stud: Student): Observable<Student> {
    return this.http.put<Student>(this.Url + '/' + stud.id, stud, headerOption);
  }
}
