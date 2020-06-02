import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { EditskillComponent } from '../../pages/editskill/editskill.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';




@Component({
  selector: 'app-manageskill',
  templateUrl: './manageskill.component.html',
  styleUrls: ['./manageskill.component.css']
})
export class ManageskillComponent implements OnInit {
  id:number;
   skill:string ;
   skillname:string;

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
  // editskill(){
  //   alert("Edit Skill");
  //   const dialogConfig =new MatDialogConfig();
  //   dialogConfig.autoFocus =true;
  //   dialogConfig.disableClose =true;
  //   dialogConfig.width ="50%";
  //   dialogConfig.height ="80%";
  //   this.dialog.open(EditskillComponent,dialogConfig);
    // this.router.navigate(['/adminlayout/editskill/'])
  // }
  ngOnInit(): void {
  }
 
 

  editskill(id){
    // alert("Edit Skill");
    const dialogConfig =new MatDialogConfig();
    dialogConfig.autoFocus =true;
    dialogConfig.disableClose =false;
    dialogConfig.width ="600px";
    dialogConfig.height ="250px";
    this.dialog.open(EditskillComponent,dialogConfig);
    // this.router.navigate(['editskill/'+ id]);
  }
  delete()
 { }
   

}
