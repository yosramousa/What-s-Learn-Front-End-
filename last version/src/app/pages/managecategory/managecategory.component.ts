import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit {
  
   name: string;
   number: number;
   search: string;
   levename :string;
   parentname:string;
  
   public CategoryFormControl = new FormControl("");
   popoverTitle :string; 
   popoverMessage :string
   confirmClicked :boolean;
   cancelClicked :boolean;
  

  constructor( private dialog: MatDialog ,location:Location, private renderer : Renderer2, private element : ElementRef, private router: Router) { 
    this.popoverTitle = 'Confirm';
   this.popoverMessage = 'Are you sure to Delete ';
   this.confirmClicked = false;
    this.cancelClicked = false;

  }

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
    // alert("edit");
    this.router.navigate(['/adminlayout/editcategory/' + id])
  }
  addcategory(id){

    // alert("add");
    this.router.navigate(['/adminlayout/addcategory/' + id]);


}
delete(id){
 alert("delete");
}
  }