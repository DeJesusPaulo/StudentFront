import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Student/add/add.component';
import { EditComponent } from './Student/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { List_CourseComponent } from './Course/list/list_Course.component';
import { List_StudentComponent } from './Student/list/list_Student.component';
import { SearchComponent } from './Student/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    List_CourseComponent,
    List_StudentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
