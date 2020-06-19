
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { EditUserLinksService } from 'src/Service/edit-user-links.service';
import { FormControl } from '@angular/forms';
import { UserLinkService } from 'src/Service/user-link.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EditUserLinksComponent } from '../edit-user-links/edit-user-links.component';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.css']
})
export class AddlinkComponent implements OnInit {

  constructor(
    private editUserLinksService:EditUserLinksService,
    private router :Router,
    private toaster:ToastrService,
    private dialog: MatDialog,
    private renderer : Renderer2,
    private element : ElementRef ,
    private userLinkServoce :UserLinkService,
    public  dialogRef: MatDialogRef<EditUserLinksComponent>,) {

     }
     UserLinks
     UserID = +localStorage.getItem("UserID")
     Link:string
  ngOnInit(): void {
  }



  AddLink(){
    let newLink={ID:0,UserID:this.UserID,Link:this.Link}
    if(this.Link)
    {
      this.userLinkServoce.PostUserLink(newLink).subscribe(res=>{
        this.toaster.success("Link  Added Successfully", '', {

          easeTime: 1000,
          timeOut: 3000
        })
        this.dialogRef.close(res.Data);
      })
    }

  }
}
