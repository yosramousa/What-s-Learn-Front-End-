import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { MangeUsersService } from '../../../Services/mange-users.service';
import { ManageAdminService } from '../../../Services/manage-admin.service';
import { environment } from  './../../../environments/environment'
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
  Image
  Password
  Age
  Email
  Adress
  Phone
  Gender

  Images: FileList;
  ImageSrc
  ConfirmedPassword

  AddAdmin() {
    let Admin = {
      ID: 0,
      Name: this.Name,
      Image:this.Image,
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
          console.log(res)
          this.router.navigate(['/adminlayout/manageadmin'])

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
      this.manageAdminService
        .upload(formData).subscribe(
          res => { 
            if(res.Successed){
                this.Image = res.Data[0].Path ;
                console.log('DDSDSDSDSDSDSSDS',res.Data)
                this.ImageSrc=`${environment.api_url}Uploads/${this.Image}`
            }
          },
          err => { }
        );

    }
  }
}
