import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { ManageAdminService } from 'app/manage-admin.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  constructor(private router: Router, private manageAdminService: ManageAdminService) { }

  ngOnInit(): void {
  }
  Genders = [
    { value: "m", name: "Male" },
    { value: "f", name: "Female" }
  ]
  Subscribe

  ID
  Name
  Password
  Age
  Email
  Adress
  Phone
  Gender


  ConfirmedPassword

  AddAdmin() {
    let Admin = {
      ID: 0,
      Name: "Salah",
      Password: this.Password,
      Age: this.Age,
      Email: this.Email,
      Adress: this.Adress,
      Phone: this.Phone,
      Gender: this.Gender
    }

    this.Subscribe = this.manageAdminService.Add(Admin).subscribe(
      res => {
        if (res.Successed) {
          console.log("Done")
        }
      }
      ,
      err => {
        console.log(err);
      }

    );

  }

}
