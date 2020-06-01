<<<<<<< HEAD
import { ManageCategoryService } from './../../../Services/manage-category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { strict } from 'assert';
=======
import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from 'app/messageservice.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329

@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit {
<<<<<<< HEAD
  PageSize: number = 10;
  PageNumber: number = 0;
  searchText: string = " ";
  searchOption: number = 0;
  Level: number = 1;
  Data: []
  Levels = [
    { id: 1, name: "Main Category" },
    { id: 2, name: "Sub Category" },
    { id: 3, name: "Track" },
    { id: 4, name: "Course" },
    { id: 0, name: "Main Category Parent" }
  ]
  shows = [10, 15, 20, 25, 30]
  SearcheOptions = [

    { id: 4, name: "ID" },
    { id: 3, name: "Name" },
    { id: 2, name: "Childs" },
    { id: 1, name: "Parent" },


  ]
  public CategoryFormControl = new FormControl("");
  constructor(private manageCategoryService: ManageCategoryService) { }
  ngOnInit(): void {
    this.GetData()
  }
  GetData() {
    console.log("Level=" + this.Level)
    console.log(this.searchText.trim())
    if (this.searchText.trim() == "") {
      this.searchOption = 0;
    }
    this.manageCategoryService.Search(this.Level, this.searchOption, this.searchText, this.PageNumber, this.PageSize)
      .subscribe(res => {
        if (res.Successed) {
          console.log("Ok")
          this.Data = res.Data
          console.log(this.Data)
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

    this.manageCategoryService.Delete( this.Level,id).subscribe(res => {
      console.log(res)
      this.GetData();
    }, err => {
      console.log(err)
    })


  }
  Update(id,Level)
  {
    //this.router.navigate(['/adminlayout/editcategory/1'])
  }
  Next() {
    this.PageNumber++;
    this.GetData()
  }
  Prev() {
    if (this.PageNumber != 0) {
      this.PageNumber--;
      this.GetData()
    }
  }


  // editcategory(id) {
  //   alert("edit");
  //   this.router.navigate(['/adminlayout/editcategory/' + id])
  // }
  // addcategory(id) {

  //   alert("add");
  //   this.router.navigate(['/adminlayout/addcategory/' + id]);


  // }
} 
=======
  
   name: string;
   number: number;
   search: string;
   levename :string;
   parentname:string;
  
   public CategoryFormControl = new FormControl("");


  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
  }
  categories = [
    {id: 1, name: "Main Category"},
    {id: 2, name: "Sub Category"},
    {id: 3, name: "Track"},
    {id: 4, name: "Course"},
    {id: 5, name: "Main Category Parent"}
  ]
  shows = [
    {id: 1, number: 10},
    {id: 2,number: 25},
    {id: 3, number: 50},
    {id: 4, number: 100}
  ]
  searches = [
    {id: 4,name: "ID"},
    {id: 1, name: "Name"},
    {id: 2,name: "Childs"},
    {id: 3, name: "Parent"},

  ]
  tracks=[
    {id: 1,name: "Main Category"},
    {id: 2, name: "Sub Ctegory"},
    {id: 3,name: "Track"},
    {id: 4, name: "Course"},
  ]
  editcategory(id){
    alert("edit");
    this.router.navigate(['/adminlayout/editcategory/' + id])
  }
  addcategory(id){

    alert("add");
    this.router.navigate(['/adminlayout/addcategory/' + id]);


}
  }
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
