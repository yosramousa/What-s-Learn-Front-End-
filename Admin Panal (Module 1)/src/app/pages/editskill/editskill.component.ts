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
  skill: string


  Data
  constructor(
    private fb: FormBuilder,
    public  dialogRef: MatDialogRef<EditskillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ManagSkillServis: ManageSillService
    , private dialog: MatDialog,
    
    private myActivatedRoute: ActivatedRoute,
    private route: Router

  ) {
    // this.description = data.description;
  }
  ID
  Isupdated = false
  ngOnInit(): void {

    this.ID = this.data.ID
 
    this.ManagSkillServis.GetByID(this.ID).subscribe(res => {
      this.skill = res.Data.skill;
      console.log(this.skill)
    })




  }



  Update() {

    console.log(this.skill)
    this.ManagSkillServis.Update({ ID: this.ID, skill: this.skill }).subscribe(res => {
      if (res.Successed) {

        console.log("ok")
      
       /// this.Isupdated = true
       this.dialogRef.close();

      }
    }, err => {

    })
  }

}
