import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileAdminService } from './../../../Services/profile-admin.service';
import { environment } from './../../../environments/environment'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-editadminprofile',
  templateUrl: './editadminprofile.component.html',
  styleUrls: ['./editadminprofile.component.css'],

})
export class EditadminprofileComponent implements OnInit {


  ID
 Name
  Password
  Age
  Email
  Adress
  Phone
  Gender:string="m"
  Image
  test="m"
  Genders = [
    { value: "Male", name: "Male" },
    { value: "Female", name: "Female" }
  ]
  Images: FileList;
  ImageSrc
  ConfirmedPassword
  constructor(private router: Router, private profileAdminService: ProfileAdminService ,private toastr:ToastrService) { }

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
      console.log(res.Data)

      if (res.Data.Gender == "\u0000") {
        this.Gender = "m"
      }
      else this.Gender = "f"
     console.log(this.Gender)
    })
  }
  

  Subscribe

  vaildAge(e)
  {
    if(e.target.selectedIndex==0)
    this.Gender="M";
    else this.Gender="F"
  }
  EditAdmin(f) {
   
    f.value.ID=this.ID
    f.value.Image=this.Image
    console.log(f.value.Image)

    this.Subscribe = this.profileAdminService.Update(f.value).subscribe(
      res => {
        if (res.Successed) {
          console.log(res.Data.Name)
          localStorage.setItem("AdminName", res.Data.Name)
          this.toastr.success("Your Information Updated Successfully","Done",{
            easeTime:500,
            timeOut:4000
          })
          console.log("res")

          this.router.navigate(['adminlayout/profile'])
        }
        else {
          console.log(res)

        }
      }
      ,
      err => {
        this.toastr.error("Something Went Wrong Please try again","Error",{
          easeTime:500,
          timeOut:4000
        })      }

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
              this.ImageSrc = `${environment.api_url}Uploads/${this.Image}`
            }
          },
          err => { }
        );

    }
  }

}
