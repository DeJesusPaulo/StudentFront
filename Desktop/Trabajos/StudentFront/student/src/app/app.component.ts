import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student';

  constructor(private router: Router){}

  List_Student(){
    this.router.navigate(["list_Student"]);
  }

  Add(){
    this.router.navigate(["add"]);
  }

  List_Course(){
    this.router.navigate(["list_Course"]);
  }

  Search(){
    this.router.navigate(["search"]);
  }
}
