import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student:Student = new Student();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("id");
    this.service.getStudent(+id!)
    .subscribe(data=> {
      this.student = data;
    });
  }

  Update(student:Student){
    this.service.updateStudent(student)
    .subscribe(data => {
      this.student= data;
      alert("Student Updated!!!");
      this.router.navigate(["list-students"]);
    });
  }

}
