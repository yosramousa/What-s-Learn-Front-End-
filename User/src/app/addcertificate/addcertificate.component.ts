import { ToastrService } from 'ngx-toastr';

import { UserLinkService } from 'src/Service/user-link.service';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditUserLinksService } from 'src/Service/edit-user-links.service';
import { environment } from 'src/environments/environment';
import { EditCertificateService } from 'src/Service/edit-certificate.service';

@Component({
  selector: 'app-addcertificate',
  templateUrl: './addcertificate.component.html',
  styleUrls: ['./addcertificate.component.css']
})
export class AddcertificateComponent implements OnInit {
  [x: string]: any;

  constructor( private editUserLinksService:EditUserLinksService,
    private router :Router,
    private toaster:ToastrService,
    public  dialogRef: MatDialogRef<AddcertificateComponent>,
    private dialog: MatDialog,
    private renderer : Renderer2,
    private element : ElementRef ,
    private editCertificateService :EditCertificateService) { }
  UserCerts
  Title
  UserID 
  Image
  ImageSrc
  Images :FileList
  ngOnInit(): void {
  }
  AddCertificate(){
  this.UserID=localStorage.getItem("UserID")
  let newCert={ID:0,Title:this.Title,Image:this.Image,UserID:this.UserID}
  console.log(newCert)
  if(this.Image && this.Title)
  {
    this.editCertificateService.PostUserCert(newCert).subscribe(res=>{
      console.log("res.Data",res.Data)
      this.toaster.success("Certificate Added  Successfully","",{easeTime:1000,timeOut:3000})
          
      this.dialogRef.close(res.Data);
    })
  } 
}

uploadImage() {

  if (this.Images.length > 0) {
    let formData: FormData = new FormData();
    for (var j = 0; j < this.Images.length; j++) {
      formData.append("file[]", this.Images[j], this.Images[j].name);
    }
    this.editCertificateService
      .uploadImage(formData).subscribe(
        res => { 
          if(res.Successed){
              this.Image = res.Data[0].Path ;
              console.log('DDSDSDSDSDSDSSDS',res.Data)
              this.toaster.success("Image Uploaded Successfully","",{easeTime:1000,timeOut:3000})
              this.ImageSrc=`${environment.api_url}Uploads/${this.Image}`
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
