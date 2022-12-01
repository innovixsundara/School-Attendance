import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { PrincipalComponent } from './admin/principal/principal.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { ClassComponent } from './admin/class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminsidebarComponent,
    PrincipalComponent,
    TeacherComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
