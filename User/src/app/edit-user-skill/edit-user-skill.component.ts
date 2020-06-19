// import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
// import { SkillService } from 'src/Service/skill.service';
// import { FormControl } from '@angular/forms';
// import { UserSkillService } from 'src/Service/user-skill.service';
// import { Route } from '@angular/compiler/src/core';
// import { Router } from '@angular/router';
// import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
// import { SkillPopupComponent } from '../skill-popup/skill-popup.component';

// @Component({
//   selector: 'app-edit-user-skill',
//   templateUrl: './edit-user-skill.component.html',
//   styleUrls: ['./edit-user-skill.component.css']
// })
// export class EditUserSkillComponent implements OnInit {

//   public CategoryFormControl = new FormControl("");
//   popoverTitle: string;
//   popoverMessage: string
//   confirmClicked: boolean;
//   cancelClicked: boolean;

//   constructor(private skillService: SkillService, 
//     private userSkillService: UserSkillService
//     ,private dialog: MatDialog
//     , private renderer: Renderer2, 
//     private element: ElementRef, private route: Router
//   ) {
//     const dialogConfig = new MatDialogConfig();

//       dialogConfig.disableClose = false;
//       dialogConfig.autoFocus = true;

//     this.popoverTitle = 'Confirm';
//     this.popoverMessage = 'Are you sure to Delete ';
//     this.confirmClicked = false;
//     this.cancelClicked = false;

//   }

//   SkillsView: [{ ID: number, skill: string }]
//   SkillChoosen: { ID: number, skill: string }
//   LevelEdited: number
//   Level: number
//   UserSkill
//   //[{ID:number,UserID:number,SkillID:number,Level:number,SkillName:string,UserName:string}]
//   UserID = +localStorage.getItem("UserID")
//   UserName = localStorage.getItem("UserName")

//   ngOnInit(): void {

//     this.skillService.GetSkills().subscribe(res => {
//       if (res.Successed) {
//         this.SkillsView = res.Data
//       }
//     })

//     this.skillService.GetUserSkill().subscribe(res => {
//       this.UserSkill = res.Data;
//       console.log(this.UserSkill)
//     })
//     window.scrollTo(0, 0)

//   }

//   AddSkill() {
//     let newSkill = {
//       ID: 0, SkillID: +this.SkillChoosen.ID, UserID: this.UserID, Level: this.Level,
//       SkillName: this.SkillChoosen.skill + "", UserName: this.UserName
//     }
//     if (this.SkillChoosen && this.Level) {   // this.UserSkill.push(newSkill)
//       // console.log(this.UserSkill)

//       this.userSkillService.PostUserSkill(newSkill).subscribe(res => {
//         if (res.Successed) {
//           this.UserSkill.push(res.Data)
//           console.log(this.UserSkill)
//         }
//       })
//     }
//   }

//   DeleteSkill(skill) {
//     this.userSkillService.DeleteUserSkill(skill.ID).subscribe(res => {
//       if (res == "UserSkill Deleted Sucessfully") {
//         console.log(res)
//         const index: number = this.UserSkill.indexOf(skill);
//         if (index !== -1) {
//           this.UserSkill.splice(index, 1);
//         }
//       }
//     })
//   }

//   EditSkill(skill) {
//     // let editedSkill = {ID:skill.ID,SkillID:skill.SkillID,UserID:this.UserID,
//     //                   Level:this.Level,SkillName:skill.SkilName+"",UserName:this.UserName}
//     // this.UserSkill[this.UserSkill.indexOf(skill)] = editedSkill

//    // this.route.navigate([`skillpopup/${id}`])
//   //  let editedCertificate = {ID:cert.ID,Title:this.Title,Image:this.Image,UserID:this.UserID}
//   //  this.UserCerts[this.UserCerts.indexOf(cert)] = editedCertificate

//    const dialogConfig = new MatDialogConfig();
//    dialogConfig.autoFocus = true;
//    dialogConfig.disableClose = true;
//    dialogConfig.width="50%"
//    dialogConfig.height="50%"
   

//     let result = this.dialog.open(SkillPopupComponent ,{
//      width: '40%',
//      height: '45%',
//       data: { Skill: skill },
//     });

//    result.afterClosed().subscribe(result => {
//      this.UserSkill[this.UserSkill.indexOf(skill)] = result
//      console.log(result)
//    });

 
//   }

//   Update() {
//     this.skillService.UpdateUserSkill(this.UserSkill).subscribe(res => {
//       console.log(res.Data)
//     })

//   }


// }
