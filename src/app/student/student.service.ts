import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>('https://localhost:7118/api/Student');
  }
  addEditStudent(postData: any, selectedStd:any){
    if(!selectedStd){
      return this.http.post('https://localhost:7118/api/Student', postData);
    }else{
      return this.http.put(`https://localhost:7118/api/Student/${selectedStd.id}`, postData);
    }
  }
  deleteStudent(studentId: number){
    return this.http.delete(`https://localhost:7118/api/Student/${studentId}`);
  }
  checkPhoneNumberExists(phoneNumber: string): Observable<boolean> {
    return this.http.post<boolean>(`https://localhost:7118/api/Student/CheckPhoneNumber`, `"${phoneNumber}"`, {headers:{'Content-Type': 'application/json'}});
  }
}
