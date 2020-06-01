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
<<<<<<< HEAD

    this.profileAdminService.GetAdminProfile().subscribe(res=>{

=======
    this.profileAdminService.GetAdminProfile().subscribe(res=>{
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
      this.Name = res.Data.Name;
      this.ID = res.Data.ID;
      this.Email = res.Data.Email;
      this.Password =res.Data.Password;
      this.Adress = res.Data.Adress;
      this.Phone = res.Data.Phone;
      this.Age = res.Data.Age;
<<<<<<< HEAD
    // console.log(this.ID)

=======
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
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
<<<<<<< HEAD
      ID: this.ID,
=======
      ID: 0,
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
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
<<<<<<< HEAD
        if (res.Successed) {
          console.log(res.Data.Name)
          localStorage.setItem("AdminName", res.Data.Name)

      console.log("res")

          this.router.navigate(['adminlayout/profile'])
        }
        else
        {
          console.log(res)

        }
=======
        if (res) {
          console.log("Done")
          this.router.navigate(['adminlayout/profile'])
        }
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
      }
      ,
      err => {
        console.log(err);
      }

    );

  }

}
