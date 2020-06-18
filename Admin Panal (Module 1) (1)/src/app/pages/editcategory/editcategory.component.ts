
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { ManageCategoryService } from 'Services/manage-category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  validName = true
  validDesc = true

  ImageSrc
  files: FileList;
  Images: FileList;
  ID: number
  level: number
  Name: string
  Description: string;
  image: string;
  ParentID: number
  links: {
    Link: string, Description: string, ParentID: number
  }[] = new Array();
  Vedios: {
    Vedio: string, Description: string, ParentID: number
  }[] = new Array();
  Documents: {
    Description: string, ParentID: number, File: string
  }[] = new Array()
  NewDocuments: {
    Description, ParentID: number, File: string
  }[]
  Data: {}
  NewDocs: {
    Description: string, File: string, ParentID: number
  }[]
  NewDocDesc: string
  NewDocfile
  NewLinkText
  NewLinkDescription
  NewVedioDescription
  NewVedioLink
  subsciption;
  subscripber
  File: string
  popoverTitle: string;
  popoverMessage: string
  confirmClicked: boolean;
  cancelClicked: boolean;

  Title
  constructor(private router: Router, private myActivatedRoute: ActivatedRoute, private manageCategoryService: ManageCategoryService) {

    this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Are you sure to Delete ';
    this.confirmClicked = false;
    this.cancelClicked = false;

  }
  test() {
    // alert()
  }
  ngOnInit(): void {


    this.ID = this.myActivatedRoute.snapshot.params['ID'];
    this.level = this.myActivatedRoute.snapshot.params['Level'];



   
    // console.log(this.myActivatedRoute.snapshot.params['ID'])
    this.subscripber = this.manageCategoryService.GetByID(this.level, this.ID).subscribe(res => {
      if (res.Successed) {
        console.log("Ok")
        console.log(res)
        this.Name = res.Data.Name
        this.image = res.Data.Image
        if (this.image)
          this.ImageSrc = `${environment.api_url}Uploads/${this.image}`
        this.Description = res.Data.Discription
        if (this.level != 1)
          this.ParentID = res.Data.ParentID
        this.links = res.Data.Links
        this.Vedios = res.Data.Vedios
        this.Documents = res.Data.Documents
        console.log(this.Vedios)





        if (this.level == 1)
          this.Title = "Edit Main Category"

        else if (this.level == 2)
          this.Title = "Edit Sub Catgory"

        else if (this.level == 3)
          this.Title = "Edit Track"

        else if (this.level == 4)
          this.Title = "Edit Course"


        this.Title += " ("+this.Name+")"

      }
      else {
        console.log("No")
        console.log(res)
      }
    }, err => {
      console.log(err)
    })

  }

  Adddoc() {
    if (this.NewDocDesc && this.File) {
     // alert()

      var NewDoc = { ID: 0, Description: this.NewDocDesc, File: this.File, ParentID: this.ID };
      this.Documents.push(NewDoc)
    }

  }
  AddLInk() {
    if (this.NewLinkText && this.NewLinkDescription) {
      var NewLink = { ID: 0, Link: this.NewLinkText, Description: this.NewLinkDescription, ParentID: this.ID };
      this.links.push(NewLink)
    }
  }
  AddVedio() {
    if (this.NewVedioLink && this.NewVedioDescription) {
      let vedio = {
        ID: 0,
        Vedio: this.NewVedioLink, Description: this.NewVedioDescription, ParentID: this.ID
      }

      this.Vedios.push(vedio)
    }
    console.log(this.Vedios)

  }
  SaveLink(link) {
    this.links[this.links.indexOf(link)] = link
  }
  DeleteLink(link) {
    this.links.splice(this.links.indexOf(link), 1)
    console.log(this.links)
  }

  Savedoc(doc) {
    this.Documents[this.Documents.indexOf(doc)] = doc
  }
  Deletedoc(doc) {
    this.Documents.splice(this.Documents.indexOf(doc), 1)
    console.log(this.Documents)
  }
  SaveVideo(vedio) {
    this.Vedios[this.Vedios.indexOf(vedio)] = vedio

  }
  DeleteVideo(vedio) {

    this.Vedios.splice(this.Vedios.indexOf(vedio), 1)
    console.log(this.Vedios)


  }
  SavAll() {

    if (!this.Name) {
      this.validName = false
      setTimeout(() => {
        this.validName = true

      }, 1000);
    }
    else if (!this.Description) {
      this.validDesc = false
      setTimeout(() => {
        this.validDesc = false

      }, 1000);

    }
    else {
      this.Data = {
        ID: this.ID,
        ParentID: this.ParentID,
        Name: this.Name,
        Discription: this.Description,
        Links: this.links != null ? this.links : [],
        Documents: this.Documents != null ? this.Documents : [],
        Vedios: this.Vedios != null ? this.Vedios : [],
        Image: this.image

      }
      console.log(this.Data)

      this.manageCategoryService.Update(this.level, this.Data).subscribe(res => {
        if (res.Successed) {
          console.log("Ok")
          console.log(res)


          this.router.navigate(['/adminlayout/managecategory'])

        }
        else {
          console.log("No")
          console.log(res)
          this.router.navigate(['/adminlayout/managecategory'])

        }
      }, err => {
        console.log(err)
        this.router.navigate(['/adminlayout/managecategory'])

      })

    }


  }
  onImageFileChange(event) {

    this.Images = event.target.files;
  }
  onDocFileChange(event) {
//alert()
    this.files = event.target.files;
  }

  uploadImage() {

    if (this.Images.length > 0) {
      let formData: FormData = new FormData();
      for (var j = 0; j < this.Images.length; j++) {
        formData.append("file[]", this.Images[j], this.Images[j].name);
      }
      this.manageCategoryService
        .upload(formData).subscribe(
          res => {
            if (res.Successed) {
              this.image = res.Data[0].Path;
              console.log('DDSDSDSDSDSDSSDS', res.Data)
              this.ImageSrc = `${environment.api_url}Uploads/${this.image}`
            }
          },
          err => { }
        );

    }
  }
  uploadFile(doc) {

    if (this.files.length > 0) {
      // alert("ok")
      let formData: FormData = new FormData();
      for (var j = 0; j < this.files.length; j++) {
        formData.append("file[]", this.files[j], this.files[j].name);
      }
      this.manageCategoryService
        .upload(formData).subscribe(
          res => {
            if (res.Successed) {
              if (doc)
                doc.File = res.Data[0].Path;
              else
                this.File = res.Data[0].Path;
              console.log('DDSDSDSDSDSDSSDS', res.Data)
            }
          },
          err => { }
        );

    }
  }
  downloadFile(url) {
    window.open(`${environment.api_url}Uploads/${url}`);
  }
}
