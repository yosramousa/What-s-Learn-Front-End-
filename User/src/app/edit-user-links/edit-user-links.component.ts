import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { EditUserLinksService } from 'src/Service/edit-user-links.service';
import { FormControl } from '@angular/forms';
import { UserLinkService } from 'src/Service/user-link.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LinkPopupComponent } from '../link-popup/link-popup.component';

@Component({
  selector: 'app-edit-user-links',
  templateUrl: './edit-user-links.component.html',
  styleUrls: ['./edit-user-links.component.css']
})
export class EditUserLinksComponent implements OnInit {

  public CategoryFormControl = new FormControl("");
  popoverTitle :string; 
  popoverMessage :string
  confirmClicked :boolean;
  cancelClicked :boolean;

  constructor(private editUserLinksService:EditUserLinksService,
     private router :Router,
     private dialog: MatDialog,
     private renderer : Renderer2,
     private element : ElementRef ,
     private userLinkServoce :UserLinkService
    ) 
    { 
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      
      this.popoverTitle = 'Confirm';
      this.popoverMessage = 'Are you sure to Delete ';
      this.confirmClicked = false;
       this.cancelClicked = false;

    }

  UserLinks
  UserID = +localStorage.getItem("UserID")
  Link:string
  ngOnInit(): void {
      this.editUserLinksService.GetUserSkill().subscribe(res=>{
        this.UserLinks= res.Data
        console.log(this.UserLinks)
      })
      window.scrollTo(0, 0)

  }

  
  AddLink(){
    let newLink={ID:0,UserID:this.UserID,Link:this.Link}
    if(this.Link)
    {
      this.userLinkServoce.PostUserLink(newLink).subscribe(res=>{
        this.UserLinks.push(res.Data)
      })
    }

  }

  DeleteLink(Link){
   
    this.userLinkServoce.DeleteUserLinkl(Link.ID).subscribe(res=>{
      if(res=="UserSocialLink Deleted Sucessfully"){
        console.log(res)
        const index: number = this.UserLinks.indexOf(Link);
             if (index !== -1) {
                 this.UserLinks.splice(index, 1);
             }
      }
    })
   
   }

  EditLink(link){
    //  this.router.navigate([`/linkpopup/${id}`])
    const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.disableClose = true;
   dialogConfig.width="50%"
   dialogConfig.height="50%"
   

    let result = this.dialog.open(LinkPopupComponent ,{
     width: '30%',
     height: '35%',
      data: { Link: link },
    });

   result.afterClosed().subscribe(result => {
     this.UserLinks[this.UserLinks.indexOf(link)] = result
     console.log(result)
   });

 
  }
 




}
