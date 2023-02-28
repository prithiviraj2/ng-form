import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { FromComponent } from './from/from.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'table',component:TableComponent},
  {path:'',component:FromComponent},
  {path:"student",
  loadChildren: () => import('./../student/student.module').then(m => m.StudentModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
