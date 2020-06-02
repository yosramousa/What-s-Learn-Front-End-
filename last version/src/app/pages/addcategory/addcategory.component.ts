import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManageCategoryService } from 'Services/manage-category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  ID: number
  ParentId: number
  level: number
  Name: string
  Description: string;
  image: string;
  ParentID: number
  links: {
    link: string, Description: string, ParentID: number
  }[] = new Array()
  Vedios: {
    Vedio: string, Description: string, ParentID: number
  }[] = new Array()
  Documents: {
    Description: string, File: string, ParentID: number
  }[] = new Array()

  Data: {}
  NewDocDesc: string
  NewDocfile
  NewLinkText
  NewLinkDescription
  NewVedioDescription
  NewVedioLink
  subsciption;
  subscripber
  constructor(private router: Router, private myActivatedRoute: ActivatedRoute, private manageCategoryService: ManageCategoryService) { }

  ngOnInit(): void {


    this.ParentId = this.myActivatedRoute.snapshot.params['ID'];
    this.level = this.myActivatedRoute.snapshot.params['Level'];
    // // console.log(this.myActivatedRoute.snapshot.params['ID'])
    // this.subscripber = this.manageCategoryService.GetByID(this.level, this.ID).subscribe(res => {
    //   if (res.Successed) {
    //     console.log("Ok")
    //     console.log(res)
    //     this.Name = res.Data.Name
    //     this.Description = res.Data.Discription
    //     if (this.level != 1)
    //       this.ParentID = res.Data.ParentID
    //     this.links = res.Data.Links
    //     this.Vedios = res.Data.Vedios
    //     this.Documents = res.Data.Documents
    //     console.log(this.Vedios)

    //   }
    //   else {
    //     console.log("No")
    //     console.log(res)
    //   }
    // }, err => {
    //   console.log(err)
    // })

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
    console.log(this.NewDocDesc);
    var NewDoc = { ID: 0, Description: this.NewDocDesc, File: "File", ParentID: 0 };
    this.Documents.push(NewDoc)
    console.log(this.Documents)
  }
  AddLInk() {
    console.log(this.NewLinkText);
    var NewLink = { ID: 0, link: this.NewLinkText, Description: this.NewLinkDescription, ParentID: 0 };
    this.links.push(NewLink)
    console.log(this.links)
  }
  AddVedio() {
    let vedio = {
      ID: 0,
      Vedio: this.NewVedioLink, Description: this.NewVedioDescription, ParentID: 0
    }
    this.Vedios.push(vedio)
    console.log(this.Vedios)

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
      ID: 0,
      ParentID: this.ParentId,
      Name: this.Name,
      Discription: this.Description,
      Links: this.links,
      Documents: this.Documents,
      Vedios: this.Vedios
    }
    console.log(this.Data)

    this.manageCategoryService.Ad(this.level, this.Data).subscribe(res => {
      if (res.Successed) {
        console.log("Ok1")
        console.log(res.Data)
        if (Number(this.level) == 3) {
          console.log("level=", this.level)

          this.manageCategoryService.AddTrackCourse(res.Data.ID, this.ParentId).subscribe(res => {
            if (res.Successed) {
              console.log("Ok2")
              console.log(res.Data)
              this.router.navigate(['/adminlayout/managecategory'])

                ;
            }
            else {
              console.log("error")

              console.log(res.Data)

            }
          });

        }
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
}
