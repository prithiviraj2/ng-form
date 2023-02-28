import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdataComponent } from './studentdata/studentdata.component';


const routes: Routes = [
  {path:'studentdata',component:StudentdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
