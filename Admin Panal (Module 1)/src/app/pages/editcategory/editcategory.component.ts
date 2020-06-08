import { ManageCategoryService } from './../../../Services/manage-category.service';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { environment } from './../../../environments/environment'
@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
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

  constructor(private router: Router, private myActivatedRoute: ActivatedRoute, private manageCategoryService: ManageCategoryService) { }

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
    console.log("add doc")
    console.log(this.NewDocDesc);
    console.log(this.File);

    var NewDoc = { ID: 0, Description: this.NewDocDesc, File: this.File, ParentID: this.ID };
    this.Documents.push(NewDoc)
    console.log(NewDoc)
    console.log(this.Documents)

  }
  AddLInk() {
    console.log("txt",this.NewLinkText);
    console.log("desc",this.NewLinkDescription);

    var NewLink = { ID: 0, Link: this.NewLinkText, Description: this.NewLinkDescription, ParentID: this.ID };
    this.links.push(NewLink)
    console.log(this.links)
  }
  AddVedio() {
    let vedio = {
      ID: 0,
      Vedio: this.NewVedioLink, Description: this.NewVedioDescription, ParentID: this.ID
    }
    this.Vedios.push(vedio)
    console.log(this.Vedios)

  }
  SaveLink(link) {
    this.links[this.links.indexOf(link)] = link
    alert("Link Saved Sucessfully")
  }
  DeleteLink(link) {
    //this.links[this.links.indexOf(link)] = link
    this.links.splice(this.links.indexOf(link), 1)
    console.log(this.links)
    alert("Link Deleted Sucessfully")
  }

  Savedoc(doc) {

    this.Documents[this.Documents.indexOf(doc)] = doc
    alert("Document Saved Sucessfully")


  }
  Deletedoc(doc) {

    this.Documents.splice(this.Documents.indexOf(doc), 1)
    console.log(this.Documents)

    alert("Document Deleted Sucessfully")


  }
  SaveVideo(vedio) {
    this.Vedios[this.Vedios.indexOf(vedio)] = vedio

    alert("Vedio Saved Sucessfully")
  }
  DeleteVideo(vedio)
  {
    
    this.Vedios.splice(this.Vedios.indexOf(vedio), 1)
    console.log(this.Vedios)

    alert("Vedio Deleted Sucessfully")

  }
  SavAll() {

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
  onImageFileChange(event) {
    this.Images = event.target.files;
  }
  onDocFileChange(event) {
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
