import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student:Student = new Student();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }

  Save(){
    this.service.createStudent(this.student)
    .subscribe(data => {
    this.student = data;
  });
}

}
