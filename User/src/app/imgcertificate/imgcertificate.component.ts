import { environment } from './../../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-imgcertificate',
  templateUrl: './imgcertificate.component.html',
  styleUrls: ['./imgcertificate.component.css']
})

export class ImgcertificateComponent implements OnInit {
  Certificate
  constructor(    @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ImgcertificateComponent>,

  ) { }
  URL=`${environment.api_url}Uploads/`

  ngOnInit(): void {
    this.Certificate=this.data.certs
    console.log(this.Certificate)


  }

}
