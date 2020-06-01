import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageserviceService } from 'app/messageservice.service';
import { ProfileAdminService } from 'app/profile-admin.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Admin: {}
  id = 1
  subscribtion
  constructor(private router: Router, private adminProfileService: ProfileAdminService) { }

  ngOnInit(): void {
    if(localStorage.getItem("Token")){
    this.subscribtion = this.adminProfileService.GetAdminProfile().subscribe(response =>
    {
      if (response.Successed ) 
      {


        this.Admin = response.Data;

        console.log(this.Admin)

      }
    });
  }
  }

  EditAdminProfile(){
      this.router.navigate(['/editadmin'])
    }
}
// /'+this.id