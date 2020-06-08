import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { ManageSillService } from 'Services/manage-sill.service';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  skill

  
Data
  constructor(
    //  private fb: FormBuilder,
    // private dialogRef: MatDialogRef<EditskillComponent>,
     //@Inject(MAT_DIALOG_DATA) public  data :any, 
    private ManagSkillServis: ManageSillService
     //,private dialog: MatDialog,
     ,private myActivatedRoute: ActivatedRoute,
     private route :Router

     ) {
     // this.description = data.description;
    }
ID 
  ngOnInit(): void {
  //   const dialogConfig =new MatDialogConfig();
  //  this.Data = this.dialog.open(EditskillComponent, dialogConfig);
  //  console.log(this.Data)
  //  console.log()
  //  console.log(this.Data.id)
  // this.ID =this.data.ID;
  // console.log(this.ID)
  this.ID = this.myActivatedRoute.snapshot.params['id'];

  this.ManagSkillServis.GetByID(this.ID).subscribe(res=>{
    this.skill = res.Data.skill;
    console.log(this.skill)
  })

  


  }
  
  Isupdated
  
  Update() {
    //this.id = this.myActivatedRoute.snapshot.params['ID'];

       this.ManagSkillServis.Update({ ID :this.ID, skill: this.skill }).subscribe(res => {
         if (res.Successed) {
           console.log(this.ID,this.skill)
           console.log("ok")
           this.Isupdated = true
           setTimeout(() => {
             this.Isupdated = false
             this.route.navigate(["adminlayout/manageskill"])
           }, 1000);
           // this.GetAll();
         }
       }, err => {

       })
     }

}
