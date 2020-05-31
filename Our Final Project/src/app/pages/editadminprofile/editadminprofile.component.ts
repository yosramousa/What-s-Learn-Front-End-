import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileAdminService } from 'app/profile-admin.service';


@Component({
  selector: 'app-editadminprofile',
  templateUrl: './editadminprofile.component.html',
  styleUrls: ['./editadminprofile.component.css'],
  
})
export class EditadminprofileComponent implements OnInit {

 
  constructor(private router: Router, private profileAdminService: ProfileAdminService) { }

  ngOnInit(): void {
    this.profileAdminService.GetAdminProfile().subscribe(res=>{
      this.Name = res.Data.Name;
      this.ID = res.Data.ID;
      this.Email = res.Data.Email;
      this.Password =res.Data.Password;
      this.Adress = res.Data.Adress;
      this.Phone = res.Data.Phone;
      this.Age = res.Data.Age;
      if(res.Data.Gender =="\u0000"){
        this.Gender = "m"
      }
        else this.Gender="f"
      
    })
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

  EditAdmin() {
    let Admin = {
      ID: 0,
      Name: this.Name,
      Password: this.Password,
      Age: this.Age,
      Email: this.Email,
      Adress: this.Adress,
      Phone: this.Phone,
      Gender: this.Gender
    }

    this.Subscribe = this.profileAdminService.Update(Admin).subscribe(
      res => {
        if (res) {
          console.log("Done")
          this.router.navigate(['adminlayout/profile'])
        }
      }
      ,
      err => {
        console.log(err);
      }

    );

  }

}
