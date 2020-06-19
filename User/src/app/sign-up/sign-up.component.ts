import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/Service/skill.service';
import { UserService } from 'src/Service/user.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/Service/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private skillService: SkillService, private userService: UserService, private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.skillService.GetSkills().subscribe(res => {
      if (res.Successed) {
        this.SkillsView = res.Data
        console.log(this.SkillsView)
      }
    })
    window.scrollTo(0, 0)

  }

  Name
  Email
  Password
  ConfirmedPassword
  Age
  Adress
  Education
  Gender
  Phone

  URL = environment.api_url + "Uploads/"

  Images: FileList;
  ImageSrc

  SkillChoosen: { ID: number, skill: string }
  SkillLevel: number
  SkillsView: [{ ID: number, skill: string }]
  Skills: { SkillID: number, UserID: number, Level: number }[] = new Array()

  CertificateString = " "
  Title: string
  CertImages: FileList
  CertImage: string
  CertImageSrc
  Certificates: { Title: string, UserID: number, Image: string }[] = new Array()

  LinkString: string = " "
  Link: string;
  Links: { link: string, UserID: number }[] = new Array()
  Image
  skillString: string = " "
  Genders = [
    { Value: "Male", Name: "Male" },
    { Value: "Female", Name: "Female" },

  ]
  IsValid
  subsciption
  AddUser(f) {

    let User = {
      ID: 0,
      Name: f.value.Name,
      Email: f.value.Email,
      Phone: f.value.Phone,
      Education: f.value.Education,
      Age: f.value.Age,
      Password: f.value.Password,
      Gender: this.Gender,
      Adress: f.value.Adress,
      Image: this.Image,
    }
    console.log("tes")
    console.log(f.value)

    this.userService.AddUser(User).subscribe(res => {
      console.log(res)
      if (res.Successed) {
        this.subsciption = this.authService.LogIn({ Email: User.Email, Password: User.Password }).subscribe(res => {
          //  console.log(res)
          if (res.Successed) {
            localStorage.setItem("Token", res.Data.Token)
            localStorage.setItem("UserID", res.Data.ID)
            localStorage.setItem("UserName", res.Data.Name)
            localStorage.setItem("UserEmail", res.Data.Email)
            this.IsValid = true
          
            this.toastr.success("Successfully Sign Up   (:", '', {
              timeOut: 1000, easeTime: 1000
            }).onHidden.subscribe(() => {
              if (localStorage.getItem('Url') == null) {
                window.location.href = `${window.location.origin}/#/home`
              } else {
    
                window.location.href = `${window.location.origin}/#/home`
              }
    
    
            })

            
          } else {
            this.IsValid = false
          }
        }, err => {
          console.log(err)
        }
        )
      }
    })
  }



  Cancel() {
    this.router.navigate(['/sign-in'])
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

  uploadCertImage() {

    if (this.CertImages.length > 0) {
      let formData: FormData = new FormData();
      for (var j = 0; j < this.CertImages.length; j++) {
        formData.append("file[]", this.CertImages[j], this.CertImages[j].name);
      }
      this.userService
        .uploadImage(formData).subscribe(
          res => {
            if (res.Successed) {
              this.CertImage = res.Data[0].Path;
              console.log('DDSDSDSDSDSDSSDS', res.Data)
              this.CertImageSrc = `${environment.api_url}Uploads/${this.CertImage}`
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
}
