import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from 'app/messageservice.service';
import { Router } from '@angular/router';
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