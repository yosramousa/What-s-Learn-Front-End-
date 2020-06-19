import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { EditCertificateService } from 'src/Service/edit-certificate.service';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';
// , private dialog: MatDialog ,location:Location
import {  MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CertificatePopupComponent } from '../certificate-popup/certificate-popup.component';
import { Location} from '@angular/common';

@Component({
  selector: 'app-edit-certificate',
  templateUrl: './edit-certificate.component.html',
  styleUrls: ['./edit-certificate.component.css']
})
export class EditCertificateComponent implements OnInit {

  public CategoryFormControl = new FormControl("");
  popoverTitle :string; 
  popoverMessage :string
  confirmClicked :boolean;
  cancelClicked :boolean;


  constructor(private router :Router,
    private userCertificateService :EditCertificateService ,
    private renderer : Renderer2, 
   private element : ElementRef,
    private dialog: MatDialog,
    private location :Location
    )
    {
      //add ref for dialog 
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      ///////////////////////////// 
      this.popoverTitle = 'Confirm';
      this.popoverMessage = 'Are you  sure you want to Delete ';
      this.confirmClicked = false;
       this.cancelClicked = false;

    }
    
  Url=`${environment.api_url}Uploads/`

  UserCerts
  Title
  UserID 
  Image
  ImageSrc
  Images :FileList
  ngOnInit(): void {
    this.UserID=localStorage.getItem('UserID')
      this.userCertificateService.GetUserCert().subscribe(res=>{
        this.UserCerts = res.Data
        console.log(this.UserCerts)
      })
      window.scrollTo(0, 0)

    }

  DeleteCert(cert){
    console.log(cert)
    this.userCertificateService.DeleteUserCert(cert.ID).subscribe(res=>{
      if(res=="UserCertificate Deleted Sucessfully"){
        console.log(res)
        const index: number = this.UserCerts.indexOf(cert);
             if (index !== -1) {
                 this.UserCerts.splice(index, 1);
                 
             }
      }
    })
  }


  AddCertificate(){
     let newCert={ID:0,Title:this.Title,Image:this.Image,UserID:this.UserID}
     console.log(newCert)
     if(this.Image && this.Title)
     {
       this.userCertificateService.PostUserCert(newCert).subscribe(res=>{
         this.UserCerts.push(res.Data)
       })
     }    

    
   
  }

  
  EditCertificate(cert){
    let editedCertificate = {ID:cert.ID,Title:this.Title,Image:this.Image,UserID:this.UserID}
    this.UserCerts[this.UserCerts.indexOf(cert)] = editedCertificate
 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
   
     let result = this.dialog.open(CertificatePopupComponent ,{
      width: '30%',
      height: '40%',
       data: { Certificate: cert },
     });
     console.log(this.UserCerts.indexOf(cert))

    result.afterClosed().subscribe(result => {
      console.log("afterClose",result)
      this.UserCerts[this.UserCerts.indexOf(cert)+1] = result
      console.log(this.UserCerts.indexOf(cert))
    });
 
    //this.router.navigate([`/certPopUp/${id}`])
  }

  Update(){
    this.userCertificateService.UpdateUserCert(this.UserCerts).subscribe(res=>{
      console.log(res.Data)
    })
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
  
   
   onImageFileChange(event) {
    this.Images = event.target.files;
    console.log(this.Images)
  }


}
