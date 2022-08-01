import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { Student } from 'src/app/Models/Student';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list_Student',
  templateUrl: './list_Student.component.html',
  styleUrls: ['./list_Student.component.css']
})
export class List_StudentComponent implements OnInit {

  students:Student[];
  courses:Course[];
  student: Student;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getStudents()
    .subscribe(data =>{
      this.students = data;
    });
  }

  Edit(student:Student):void{
    localStorage.setItem("id",student.id.toString());   //se almacena con un key,value ambos String
    this.router.navigate(["edit"]);
  }


  Delete(student:Student):void{
    this.service.deleteStudent(this.student) 
    .subscribe(data => {
      this.students = this.students.filter(s=> s! == student);
      alert("Student Deleted!!")
    });
  }

  Search(surname:string): void{
    localStorage.setItem("surname",this.student.surname.toString());
    this.router.navigate(["search"]);
  }

}
