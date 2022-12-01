import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit {

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  constructor() { }

  ngOnInit(): void {
  }
 

}
