import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileAdminService } from 'app/profile-admin.service';
import { environment } from './../../../environments/environment'


@Component({
  selector: 'app-editadminprofile',
  templateUrl: './editadminprofile.component.html',
  styleUrls: ['./editadminprofile.component.css'],

})
export class EditadminprofileComponent implements OnInit {


  constructor(private router: Router, private profileAdminService: ProfileAdminService) { }

  ngOnInit(): void {

    this.profileAdminService.GetAdminProfile().subscribe(res => {
 
      this.Name = res.Data.Name;
      this.ID = res.Data.ID;
      this.Email = res.Data.Email;
      this.Password = res.Data.Password;
      this.Adress = res.Data.Adress;
      this.Phone = res.Data.Phone;
      this.Age = res.Data.Age;
      this.Image = res.Data.Image
      console.log("res",res)

      if (res.Data.Gender == "\u0000") {
        this.Gender = "m"
      }
      else this.Gender = "f"

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
  Image

  Images: FileList;
  ImageSrc
  ConfirmedPassword

  EditAdmin() {
    let Admin = {
      ID: this.ID,
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
        if (res.Successed) {
          console.log(res.Data.Name)
          localStorage.setItem("AdminName", res.Data.Name)

          console.log("res")

          this.router.navigate(['adminlayout/profile'])
        }
        else {
          console.log(res)

        }
      }
      ,
      err => {
        console.log(err);
      }

    );

  }

  onImageFileChange(event) {
    this.Images = event.target.files;
  }


  uploadImage() {

    if (this.Images.length > 0) {
      let formData: FormData = new FormData();
      for (var j = 0; j < this.Images.length; j++) {
        formData.append("file[]", this.Images[j], this.Images[j].name);
      }
      this.profileAdminService
        .upload(formData).subscribe(
          res => {
            if (res.Successed) {
              this.Image = res.Data[0].Path;
              console.log('DDSDSDSDSDSDSSDS', res.Data)
              this.ImageSrc = `${environment.api_url}Uploads/${this.Image}`
            }
          },
          err => { }
        );

    }
  }

}
