import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  student:Student;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
   this.Search();
  }

  Search(){
    let surname = localStorage.getItem("surname")
    this.service.findBySurname(surname!)
    .subscribe(data =>{
      this.student = data;
    });
  }

}


