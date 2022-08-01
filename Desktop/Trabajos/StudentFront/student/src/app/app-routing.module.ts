import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List_CourseComponent } from './Course/list/list_Course.component';
import { AddComponent } from './Student/add/add.component';
import { EditComponent } from './Student/edit/edit.component';
import { List_StudentComponent} from './Student/list/list_Student.component';
import { SearchComponent } from './Student/search/search.component';


const routes: Routes = [
  {path:'list_Course', component:List_CourseComponent},
  {path:'list_Student', component:List_StudentComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
