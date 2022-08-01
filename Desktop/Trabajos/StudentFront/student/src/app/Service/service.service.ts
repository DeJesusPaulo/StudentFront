import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../Models/Student';
import { Course } from '../Models/Course';
import { Observable, throwError} from 'rxjs';
import { tap, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  private  apiUrl = environment.apiBaseUrl;
 

  getStudents(){
    return this.http.get<Student[]>(this.apiUrl+"/students");
  }

  /*students$ = <Observable<Student[]>>
  this.http.get<Student[]>(this.apiUrl+"/students")
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );*/

  getCourses(){
    return this.http.get<Course[]>(this.apiUrl+"/courses")
    .pipe(
      tap(console.log), 
      catchError(this.handleError)
    );
  }

  /*courses$ = <Observable<Course[]>>
  this.http.get<Course[]>(this.apiUrl+"/courses")
  .pipe(
    tap(console.log),
     catchError(this.handleError)
  );*/

  createStudent(student:Student){
    return this.http.post<Student>(this.apiUrl,student)
    .pipe(
      tap(console.log), catchError(this.handleError)
    ); 
  }

  /*createStudent$ = (student:Student) => <Observable<Student>>
  this.http.post<Student>(this.apiUrl+"/create", student)
  .pipe(
    tap(console.log),
     catchError(this.handleError)
  );*/

  getStudent(id:number){                                  // para capturar el student especifico
    return this.http.get<Student>(this.apiUrl+"/"+id)
    .pipe(
      tap(console.log), catchError(this.handleError)
    );
  }

  /*getStudent$= (id:number) => <Observable<Student>>
  this.http.get<Student>(this.apiUrl+"/student/id/"+id)
  .pipe(
    tap(console.log), catchError(this.handleError)
  );*/

  updateStudent(student:Student){
    return this.http.put<Student>(this.apiUrl+"/id"+student.id,student)
    .pipe(
      tap(console.log), catchError(this.handleError)
    );
  }

  /*updateStudent$= (student:Student) => <Observable<Student>>
  this.http.put<Student>(this.apiUrl+"/update/id"+student.id,student)
  .pipe(
    tap(console.log), catchError(this.handleError)
  );*/

  deleteStudent(student:Student){
    return this.http.delete<Student>(this.apiUrl+"/"+student.id)
    .pipe(
      tap(console.log), catchError(this.handleError)
    );
  }

  /*deleteStudent$= (student:Student) => <Observable<Student>>
  this.http.delete<Student>(this.apiUrl+"/delete/"+student.id)
  .pipe(
    tap(console.log), catchError(this.handleError)
  );*/

  /*handleError (handleError:any): Observable<never> {
    return throwError('');
  }*/

  /*findBySurname$= (surname:string) => <Observable<Student>>
  this.http.get<Student>(this.apiUrl+"/student/surname/"+ surname)
  .pipe(
    tap(console.log), catchError(this.handleError)
  );*/

  findBySurname(surname:String){
    return this.http.get<Student>(this.apiUrl+"/student/surname/" + surname)
    .pipe(
      tap(console.log), catchError(this.handleError)
    );
  }

  

   private handleError (err: any): Observable<never> {
    return throwError(() => new err);
  }
}
