import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InboxService } from 'Services/inbox.service';
import { NgModule } from '@angular/core';
import { ManageSillService } from 'Services/manage-sill.service';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-msgdetails',
  templateUrl: './msgdetails.component.html',
  styleUrls: ['./msgdetails.component.css']
})
export class MsgdetailsComponent implements OnInit {
  ID
  Message: string

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MsgdetailsComponent>,
    private dialog: MatDialog,



    @Inject(MAT_DIALOG_DATA) public data: any, private inboxService: InboxService
  ) { }

  ngOnInit(): void {


    this.ID = this.data.ID
    this.inboxService.GetByID(this.ID).subscribe(res => {
      this.Message = res.Data.Text
      // console.log(this.messageDatail)
    })


  }

  close() {
    
    this.dialogRef.close();

  }



}
