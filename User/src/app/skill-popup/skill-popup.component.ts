import { Component, OnInit, Inject } from '@angular/core';
import { SkillService } from 'src/Service/skill.service';
import { UserSkillService } from 'src/Service/user-skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-skill-popup',
  templateUrl: './skill-popup.component.html',
  styleUrls: ['./skill-popup.component.css']
})
export class SkillPopupComponent implements OnInit {

  constructor(public userskillService: UserSkillService,
    private skillService: SkillService,
    private toastr: ToastrService,

    public myActivatedRoute: ActivatedRoute,

    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SkillPopupComponent>,

  ) { }
  ID
  UserSkill
  SkillsView
  ngOnInit(): void {
    // this.ID = this.myActivatedRoute.snapshot.params['id']

    // this.userskillService.GetByID(this.ID).subscribe(res=>{
    //     this.UserSkill = res.Data;
    //     console.log(this.UserSkill)

    // })

    this.skillService.GetSkills().subscribe(res => {
      if (res.Successed) {
        this.SkillsView = res.Data
      }
    })

    this.UserSkill = this.data.Skill
    console.log(this.UserSkill)

  }

  UpdateSkill() {
    this.userskillService.UpdateUserSkill(this.UserSkill).subscribe(res => {
      console.log(res)
      if (res.Successed) {
        this.toastr.success("Skill Updated Successfully", '', {

          easeTime: 1000,
          timeOut: 3000
        })
        console.log(res.Data)

      }
      else {
        this.toastr.error("Somthing Went Wrong", '', {

          easeTime: 1000,
          timeOut: 3000
        })
      }
      this.dialogRef.close(res.Data);

    })
  }

}
