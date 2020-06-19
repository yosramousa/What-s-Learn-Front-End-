import { Component, OnInit, Inject } from '@angular/core';
import { UserLinkService } from 'src/Service/user-link.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditUserLinksComponent } from '../edit-user-links/edit-user-links.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-link-popup',
  templateUrl: './link-popup.component.html',
  styleUrls: ['./link-popup.component.css']
})
export class LinkPopupComponent implements OnInit {

  constructor( public userLinkService :UserLinkService,
    private toastr: ToastrService,

    @Inject(MAT_DIALOG_DATA) public data: any,
    public myActivatedRoute :ActivatedRoute ,
    public  dialogRef: MatDialogRef<EditUserLinksComponent>,
    private router :Router
    ) { }
ID
UserLink

  ngOnInit(): void {
    // this.ID = this.myActivatedRoute.snapshot.params['id']

    // this.userLinkService.GetByID(this.ID).subscribe(res=>{
    //     this.UserLink = res.Data;
    //     console.log(this.UserLink)

    // })

    this.UserLink = this.data.Link
    console.log(this.UserLink)
    
  }

  UpdateLink(){
    this.userLinkService.UpdateUserLink(this.UserLink).subscribe(res=>
      {
        console.log(res)
        if(res.Successed){
          this.toastr.success("Link Updated Successfully ","",{easeTime:1000,timeOut:3000})
         // this.router.navigate(['profile'])
         this.dialogRef.close(res.Data);

        }
      })
  }

}
