import { AddExistedCourseComponent } from './../../add-existed-course/add-existed-course.component';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { ManageCategoryService } from 'Services/manage-category.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit {

  public CategoryFormControl = new FormControl("");
  popoverTitle: string;
  popoverMessage: string
  confirmClicked: boolean;
  cancelClicked: boolean;


  constructor(
    private manageCategoryService: ManageCategoryService,
     private dialog: MatDialog, location: Location, 
     private renderer: Renderer2, 
     private element: ElementRef,
     private toastr : ToastrService, 
     private router: Router) {
    this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Choose what do you want ';
    this.confirmClicked = false;
    this.cancelClicked = false;

  }
  Url = environment.api_url
  PageSize: number = 5;
  PageNumber: number = 0;
  searchText: string;
  searchOption: number = 0;
  Level: number = 1;
  NumOfPages = 9;
  count: number
  numbers
  len
  Data: []
  SortBy = 0;
  Levels = [
    { id: 1, name: "Main Category" },
    { id: 2, name: "Sub Category" },
    { id: 3, name: "Track" },
    { id: 4, name: "Course" },
    { id: 0, name: "Main Category Parent" }
  ]
  shows = [ 10, 15, 20, 25, 30]
  SearcheOptions = [

    { id: 4, name: "ID" },
    { id: 3, name: "Name" },
    { id: 2, name: "Childs" },
    { id: 1, name: "Parent" },


  ]


  ngOnInit(): void {
    this.GetData()
  }
  GetData() {
    //alert()
    console.log("Level=" + this.Level)
    //console.log(this.searchText.trim())
    if (this.searchText == undefined) {
      this.searchOption = 0;
      this.searchText = " ";
    }
    this.searchText = this.searchText.trim();

    this.manageCategoryService.Search(this.SortBy, this.Level, this.searchOption, this.searchText, this.PageNumber, this.PageSize)
      .subscribe(res => {
        if (res.Successed) {
          console.log("Ok")
          this.Data = res.Data
          console.log(this.Data)
          this.count = res.Count
          this.NumOfPages = Math.round(this.count / this.PageSize)
          this.numbers = Array(this.NumOfPages).fill(1).map((x, i) => i)
          this.len = this.numbers;
          this.numbers = Array(this.NumOfPages).fill(1).map((x, i) => i).splice(0, 5)
         
     
        }
        else {
          console.log("No")
          console.log(res)
        }
      }, err => {
        console.log(err)
      })
  }
  Remove(id) {
    console.log(this.Level)

    this.manageCategoryService.Delete(this.Level, id).subscribe(res => {
      console.log(res)
      this.GetData();
      this.toastr.success("Admin Deleted Successfuly","Done", {
        timeOut: 3000,
        easeTime: 5000
      })
      
    }, err => {
      console.log(err)
      this.toastr.error("some thing went wrong, Please try again","Error" , {
        timeOut: 3000,
        easeTime: 5000
      })
    })


  }
  Update(id, Level) {
    //this.router.navigate(['/adminlayout/editcategory/1'])
  }
  Next() {
    this.PageNumber++;

    // if(this.PageNumber<this.len.reverse[0])

    this.GetData()
  }
  Prev() {
    if (this.PageNumber != 0) {
      this.PageNumber--;
      this.GetData()
    }
  }

  editcategory(id) {
    //alert("edit");
    this.router.navigate(['/adminlayout/editcategory/' + id + '/' + this.Level])
  }

  SortBYNameAsc() {
    this.PageNumber = 0;
    // alert()
    //alert()
    document.getElementById("NameAsc").style.color = "black";
    document.getElementById("NameDesc").style.color = "gainsboro";
    this.SortBy = 2;
    this.GetData()
  }
  SortBYNameDesc() {
    this.PageNumber = 0;

    document.getElementById("NameAsc").style.color = "gainsboro";
    document.getElementById("NameDesc").style.color = "black";
    this.SortBy = 3
    this.GetData()


  }
  SortBYParentAsc() {
    this.PageNumber = 0;

    document.getElementById("ParentAsc").style.color = "black";
    document.getElementById("Parentdesc").style.color = "gainsboro";
    this.SortBy = 4
    this.GetData()

  }
  SortBYPartntDesc() {
    this.PageNumber = 0;

    document.getElementById("ParentAsc").style.color = "gainsboro";
    document.getElementById("Parentdesc").style.color = "black";
    this.SortBy = 5
    this.GetData()

  }
  SortBYIDAsc() {
    this.PageNumber = 0;
    document.getElementById("IDAsc").style.color = "black";
    document.getElementById("IDdesc").style.color = "gainsboro";
    this.SortBy = 0
    this.GetData()

  }
  SortBYIDDesc() {
    this.PageNumber = 0;

    document.getElementById("IDAsc").style.color = "gainsboro";
    document.getElementById("IDdesc").style.color = "black";
    this.SortBy = 1
    this.GetData()

  }
  MoveTo(num) {
    this.PageNumber = num;
    this.GetData()

  }
delete(id) {
    //alert("delete");
  }
  addcourse(id) {

    // alert("add");
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="40%"
    dialogConfig.height="35%"
    
    let result = this.dialog.open(AddExistedCourseComponent,{
      width: '33%',
      height: '60%',
      data: { ID: id },
     
     });

     

    result.afterClosed().subscribe(result => {
     // console.log(`Dialog result: ${result.ID}`);
      
       this.GetData()
    });
   


  }
  addcategory(id){
    // alert("hiiiii");
   this.router.navigate(['/adminlayout/addcategory/' + id + '/' + this.Level]);
  }
}
