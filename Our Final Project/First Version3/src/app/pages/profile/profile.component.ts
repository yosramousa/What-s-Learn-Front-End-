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
    this.subscribtion = this.adminProfileService.GetByID(this.id).subscribe(response =>
    {
      if (response.json().Successed == true) 
      {

        this.Admin = response.json().Data;

        console.log(this.Admin)
      }
    });
  }
  EditAdminProfile(){
      this.router.navigate(['/editadmin'])
    }
}
// /'+this.id