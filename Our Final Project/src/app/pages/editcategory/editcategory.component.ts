import { ManageCategoryService } from './../../../Services/manage-category.service';
import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from 'app/messageservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from  './../../../environments/environment'
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
    link: string, Description: string, ParentID: number
  }[] = new Array();
  Vedios: {
    Vedio: string, Description: string, ParentID: number
  }[] = new Array();
  Documents: {
    Description, ParentID: number,File: string
  }[] = new Array()
  NewDocuments: {
    Description, ParentID: number
  }[]
  Data: {}
  NewDocs: {
    Description: string, File: string, ParentID: number
  }[]
  NewDocDesc: string
  NewDocfile
  subsciption;
  subscripber
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
        this.image=res.Data.Image
        if(this.image)
        this.ImageSrc=`${environment.api_url}Uploads/${this.image}`
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
  SaveDescribtion() {
    // console.log("any thing")

    // let admin= {
    //   description : this.description,
    //   image :this.image,
    //   link :this.link,
    // video :this.video,
    //   file :this.file,
    // };

    // this.router.navigate(['managecategory'])

  }
  Adddoc() {
    // console.log(this.NewDocDesc);
    // var NewDoc= { ID: 0,Description:this.NewDocDesc,File:"File",ParentID: Number(this.ID) };
    // this.NewDocs.push(NewDoc)
    // console.log(this.NewDocs)
  }
  SaveLink(link) {

    this.links[this.links.indexOf(link)] = link

    alert("Link Saved Sucessfully")


  }
  Savedoc(doc) {

    this.Documents[this.Documents.indexOf(doc)] = doc
    alert("Document Saved Sucessfully")


  }
  SaveVideos(vedio) {
    this.Vedios[this.Vedios.indexOf(vedio)] = vedio

    alert("Vedio Saved Sucessfully")
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
      Image:this.image

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
        // this.router.navigate(['/adminlayout/managecategory'])

      }
    }, err => {
      console.log(err)
      //this.router.navigate(['/adminlayout/managecategory'])

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
            if(res.Successed){
                this.image = res.Data[0].Path ;
                console.log('DDSDSDSDSDSDSSDS',res.Data)
                this.ImageSrc=`${environment.api_url}Uploads/${this.image}`
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
            if(res.Successed){
                doc.File = res.Data[0].Path ;
                console.log('DDSDSDSDSDSDSSDS',res.Data)
               
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
