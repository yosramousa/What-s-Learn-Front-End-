import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCertificateService } from 'src/Service/edit-certificate.service';
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditCertificateComponent } from '../edit-certificate/edit-certificate.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-certificate-popup',
  templateUrl: './certificate-popup.component.html',
  styleUrls: ['./certificate-popup.component.css']
})
export class CertificatePopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,

    private userCertificateService: EditCertificateService,
    public dialogRef: MatDialogRef<EditCertificateComponent>,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private myActivatedRoute: ActivatedRoute,
    private route: Router

  ) { }
  Certificate

  Image
  ImageSrc
  Images: FileList
  ID
  ngOnInit(): void {
    this.Certificate = this.data.Certificate
    console.log(this.Certificate)


  }


  uploadImage() {

    if (this.Images.length > 0) {
      let formData: FormData = new FormData();
      for (var j = 0; j < this.Images.length; j++) {
        formData.append("file[]", this.Images[j], this.Images[j].name);
      }
      this.userCertificateService
        .uploadImage(formData).subscribe(
          res => {
            if (res.Successed) {
              this.Certificate.Image = res.Data[0].Path;
              console.log('DDSDSDSDSDSDSSDS', res.Data)
              this.toastr.success("Image Uploaded Successfully",'',{easeTime:1000,timeOut:3000})
              this.ImageSrc = `${environment.api_url}Uploads/${this.Certificate.Image}`
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


  Update() {
    this.userCertificateService.UpdateUserCert(this.Certificate).subscribe(res => {
      if (res.Successed) {

        console.log("Ok", res.Data)
        this.toastr.success("Certficate Uploaded Successfully",'',{easeTime:1000,timeOut:3000})


        this.dialogRef.close(res.Data);
      }
    }
    )
  }
}
