import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageserviceService } from 'app/messageservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string ;
  email:string ;
  address:string ;
  gender:string ;
  phone:string ;
  age:number ;
  src:string="assets/img/uc.jpg";
  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
  }
  EditAdminProfile(){
    this.router.navigate(['/editadmin'])
  }
}
