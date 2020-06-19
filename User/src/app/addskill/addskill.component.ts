
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { EditUserLinksService } from 'src/Service/edit-user-links.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UserSkillService } from 'src/Service/user-skill.service';
import { SkillService } from 'src/Service/skill.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {
  [x: string]: any;

  constructor(private editUserLinksService:EditUserLinksService,
    private toastr: ToastrService,

    private router :Router,
    private dialog: MatDialog,
    private renderer : Renderer2,
    private element : ElementRef ,
    private userSkillService :UserSkillService,
    private skillService:SkillService,
    public  dialogRef: MatDialogRef<AddskillComponent>,

    ) { }



    
  SkillsView: [{ ID: number, skill: string }]
  SkillChoosen: { ID: number, skill: string }
  LevelEdited: number
  Level: number
  UserSkill
  //[{ID:number,UserID:number,SkillID:number,Level:number,SkillName:string,UserName:string}]
  UserID = +localStorage.getItem("UserID")
  UserName = localStorage.getItem("UserName")
  ngOnInit(): void {
    this.skillService.GetSkills().subscribe(res => {
      if (res.Successed) {
        this.SkillsView = res.Data
      }
    })

    
    window.scrollTo(0, 0)
  }
  AddSkill() {
    let newSkill = {
      ID: 0, SkillID: +this.SkillChoosen.ID, UserID: this.UserID, Level: this.Level,
      SkillName: this.SkillChoosen.skill + "", UserName: this.UserName
    }
    console.log("new Skill",newSkill)
    if (this.SkillChoosen && this.Level) {   // this.UserSkill.push(newSkill)
      // console.log(this.UserSkill)

      this.userSkillService.PostUserSkill(newSkill).subscribe(res => {
        if (res.Successed) {           

      this.toastr.success("Skill Added Successfully",'',{easeTime:1000,timeOut:3000})
          this.dialogRef.close(newSkill);
        }
      })
    }
  }

}
