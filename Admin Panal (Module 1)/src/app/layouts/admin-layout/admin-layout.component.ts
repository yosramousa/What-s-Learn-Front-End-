import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
 constructor(private router:Router){}
  ngOnInit() { 
    if(!localStorage.getItem("AdminToken")){
      
      this.router.navigate(['/adminregistration'])
    }
  }
}
