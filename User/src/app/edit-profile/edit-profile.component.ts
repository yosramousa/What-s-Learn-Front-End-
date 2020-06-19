import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/Service/user.service';
import { environment } from 'src/environments/environment';
import { SkillService } from 'src/Service/skill.service';
import { Key } from 'protractor';
import { Router } from '@angular/router';
import { coerceCssPixelValue } from '@angular/cdk/coercion';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private toastr: ToastrService, private router: Router, private userService: UserService, private skillService: SkillService) { }
  User
  URL = environment.api_url + "Uploads/"

  Images: FileList;
  ImageSrc
  Image
  ConfirmedPassword
  Isconfirmed = true

  Genders = [
    { Value: "Male", Name: "Male" },
    { Value: "Female", Name: "Female" },
  ]
  Gender
  ngOnInit(): void {


    this.userService.GetEditProfile().subscribe(res => {

      this.User = res.Data
      this.Gender = this.User.Gender
      console.log(this.User)
      this.Image = this.User.Image;
      this.ImageSrc = `${environment.api_url}Uploads/${this.Image}`

    })
    window.scrollTo(0, 0)

  }
  CheckConfirmPass(event) {



    if (this.User.Password != event.target.value) {
      this.Isconfirmed = false


    }
    else
      this.Isconfirmed = true

    console.log(this.User.Password, event.target.value, this.Isconfirmed)

  }

  uploadImage() {

    if (this.Images.length > 0) {
      let formData: FormData = new FormData();
      for (var j = 0; j < this.Images.length; j++) {
        formData.append("file[]", this.Images[j], this.Images[j].name);
      }
      this.userService
        .uploadImage(formData).subscribe(
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


  onImageFileChange(event) {
    this.Images = event.target.files;
    console.log(this.Images)
  }

  Update(f) {
    console.log(this.Gender)
    if (this.Gender == null) {
      this.Gender = this.User.Gender
    }

    this.User = {
      ID: localStorage.getItem('UserID'),
      Name: f.value.Name,
      Phone: f.value.Phone,
      Email: f.value.Email,
      Adress: f.value.Adress,
      Password: f.value.Password,
      Education: f.value.Education,
      Age: f.value.Age,
      Gender: this.Gender,
      Image: this.Image
    }
    console.log(this.User)
    this.userService.Update(this.User).subscribe(res => {
      console.log(res)
      if (res.Successed) {
        this.toastr.success("Profile Updated Successfully ", '', {
          timeOut: 1500, easeTime: 1000
        }).onHidden.subscribe(() => {

          this.router.navigate(['/profile'])

        })

      }
    })
  }

  Cancel() {
    this.router.navigate(['/profile'])
  }
}
