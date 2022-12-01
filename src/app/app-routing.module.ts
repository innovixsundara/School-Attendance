import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './admin/class/class.component';
import { PrincipalComponent } from './admin/principal/principal.component';
import { TeacherComponent } from './admin/teacher/teacher.component';

const routes: Routes = [
  {path:'adminprincipal',component:PrincipalComponent},
  {path:'adminteacher',component:TeacherComponent},
  {path:'adminclass',component:ClassComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[PrincipalComponent]
