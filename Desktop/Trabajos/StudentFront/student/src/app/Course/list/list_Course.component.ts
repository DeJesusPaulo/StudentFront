import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list_Course',
  templateUrl: './list_Course.component.html',
  styleUrls: ['./list_Course.component.css']
})
export class List_CourseComponent implements OnInit {

  courses:Course[];
  constructor(private service:ServiceService, router:Router) { }

  ngOnInit(): void {
    this.service.getCourses()
    .subscribe(data => {
      this.courses = data;
    });
    }

}
