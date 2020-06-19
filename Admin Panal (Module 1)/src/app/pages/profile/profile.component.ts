import { ProfileAdminService } from './../../../Services/profile-admin.service';
import { MessageserviceService } from './../../../Services/messageservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Admin:any
  Gender
  id = 1
  subscribtion
  Url=environment.api_url
  constructor(private router: Router, private adminProfileService: ProfileAdminService) { }

  ngOnInit(): void {
    if(localStorage.getItem("AdminToken")){
    this.subscribtion = this.adminProfileService.GetAdminProfile().subscribe(response =>
    {
      if (response.Successed ) 
      {

        this.Admin = response.Data;
       

      }
    });
  }
  }

  EditAdminProfile(){
      this.router.navigate(['/adminlayout/editadminprofile'])
    }
}
