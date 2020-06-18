import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { EditskillComponent } from '../../pages/editskill/editskill.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ManageSillService } from 'Services/manage-sill.service';




@Component({
  selector: 'app-manageskill',
  templateUrl: './manageskill.component.html',
  styleUrls: ['./manageskill.component.css']
})
export class ManageskillComponent implements OnInit {
  id:number;
   skill:string ;
   skillname:string;
   data
   count
   NumOfPages
   numbers
   SortBy =0 
   PageIndex =0
   PageSize= 10
   Isupdated
   IsAdded
   Skill
   PageNumber
 
 
   public CategoryFormControl = new FormControl("");
   popoverTitle :string; 
   popoverMessage :string
   confirmClicked :boolean;
   cancelClicked :boolean;
  
  constructor( private ManagSkillServis: ManageSillService,private dialog: MatDialog ,location:Location, private renderer : Renderer2, private element : ElementRef, private router: Router) { 
    this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Are you sure to Delete ';
    this.confirmClicked = false;
     this.cancelClicked = false;
  }
  ngOnInit(): void {
    this.GetAll()
  }
  IsDeleted
  Skills
  DeletSkill(id) {
    this.ManagSkillServis.Delete(id).subscribe(res => {
      if (res) {
        this.IsDeleted = true
        setTimeout(() => {
          this.IsDeleted = false


        }, 1000);

        this.GetAll()


      }

    },
      err => {

      })
  }
  GetAll() {

    this.ManagSkillServis.GetAll(this.SortBy,this.PageIndex, this.PageSize).subscribe(res => {
      if (res.Successed) {
        //  this.IsDeleted = false

        console.log("Ok")
        console.log(res)
        this.Skills = res.Data
        this.count = res.Count
        this.NumOfPages = Math.round(this.count / this.PageSize)
        this.numbers = Array(this.NumOfPages).fill(1).map((x, i) => i);

      }
      else {
        console.log("No")
        console.log(res)
      }
    }, err => {
      console.log(err)
    })

  }
    AddSkill() {
    this.ManagSkillServis.Add({ ID: 0, skill: this.Skill }).subscribe(res => {
      if (res.Successed) {
        console.log("ok")
        this.IsAdded = true
        setTimeout(() => {
          this.IsAdded = false
        }, 1000);
        this.Skills.push(res.Data)
        this.Skill = ""
      }
    }, err => {

    })
  }
  Prev() {
    if (this.PageIndex > 0) {
      this.PageIndex--;
      this.GetAll();
    }
  }
  Next() {
    this.PageIndex++;
    this.GetAll();
  }
  sort(SortOption) {


  }
  EditSkill(id) {
    
//  // alert("Edit Skill");
//  const dialogConfig =new MatDialogConfig();
//  dialogConfig.autoFocus =true;
//  dialogConfig.disableClose =true;
//  // dialogConfig.width ="350px";
//  // dialogConfig.height ="200px";

//  let result = this.dialog.open(EditskillComponent, 
//   {
//    data: {
//     ID: id
//   }
//   }
//   );
//   result.afterClosed().subscribe(value => {
//         console.log(`Dialog sent: ${value}`);
//         this.GetAll();
        
//       });
this.router.navigate(['/adminlayout/editskill/'+id])
    }
    SortBYNameAsc() {
      this.PageNumber = 0;
  
      document.getElementById("NameAsc").style.color = "black";
      document.getElementById("NameDesc").style.color = "gainsboro";
      this.SortBy = 2;
      this. GetAll()
    }
    SortBYNameDesc() {
      this.PageNumber = 0;
  
      document.getElementById("NameAsc").style.color = "gainsboro";
      document.getElementById("NameDesc").style.color = "black";
      this.SortBy = 3
      this. GetAll()
  
  
    }
   
    SortBYIDAsc() {
      this.PageNumber = 0;
      document.getElementById("IDAsc").style.color = "black";
      document.getElementById("IDdesc").style.color = "gainsboro";
      this.SortBy = 0
      this. GetAll()
  
    }
    SortBYIDDesc() {
      this.PageNumber = 0;
  
      document.getElementById("IDAsc").style.color = "gainsboro";
      document.getElementById("IDdesc").style.color = "black";
      this.SortBy = 1
      this. GetAll()
  
    }
    MoveTo(num) {
      this.PageNumber = num;
      this. GetAll()
  
    }


}
