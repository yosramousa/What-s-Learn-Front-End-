import { MessageserviceService } from './../../../Services/messageservice.service';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditskillComponent } from '../../pages/editskill/editskill.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MsgdetailsComponent } from '../msgdetails/msgdetails.component';
import { InboxService } from 'Services/inbox.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  public CategoryFormControl = new FormControl("");
  popoverTitle: string;
  popoverMessage: string
  confirmClicked: boolean;
  cancelClicked: boolean;
    constructor(
      private toastr :ToastrService,
      private inboxService: InboxService,
       private dialog: MatDialog, location: Location, 
       private renderer: Renderer2, 
       private element: ElementRef, 
       private router: Router) {
      this.popoverTitle = 'Confirm';
      this.popoverMessage = 'Are you sure to Delete ';
      this.confirmClicked = false;
      this.cancelClicked = false;
  
    }

  PageSize = 5
  PageIndex = 0
  Messages: {}
  SearchOption = 0
  SearchText = " "
  PageNumber = 0
  SortBy = 0;
  SerachOptions = [
    { ID: 0, name: "Chose Search Options" },
    { ID: 1, name: "Name" },
    { ID: 2, name: "Email" },

  ];

  shows: number[] = [10, 15, 20, 25]
  NumOfPages
  count
  numbers
  ngOnInit(): void {
    this.Search()

  }
  Search() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    // this.SearchOption = 0
    console.log("asas", this.SearchOption)
    this.inboxService.Search(this.SortBy, this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
      .subscribe(res => {
        this.Messages = res.Data;
        console.log(this.Messages)
        this.count = res.Count
        this.NumOfPages = Math.round(this.count / this.PageSize)
        this.numbers = Array(this.NumOfPages).fill(1).map((x, i) => i);

      })
  }
  Next() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.PageIndex++;
    this.Search()

  }
  Prev() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.PageIndex--;
    console.log(this.PageIndex);

    this.Search()


  }

  Filter() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.Search()

  }

  Delete(id) {
    this.inboxService.Delete(id).subscribe(res => {
      if (res) console.log("Deleted")
      this.toastr.success("Message Deleted Successfully","Done",{
        easeTime:500,
        timeOut:4000
      })
      if (!(this.SearchText || this.SearchOption)) {
        this.SearchOption = 0
        this.SearchText = " "
       
      }
      this.Search()

    })
  }

  SortBYNameAsc() {
    this.PageNumber = 0;

    document.getElementById("NameAsc").style.color = "black";
    document.getElementById("NameDesc").style.color = "gainsboro";
    this.SortBy = 2;
    this.Search()
  }
  SortBYNameDesc() {
    this.PageNumber = 0;

    document.getElementById("NameAsc").style.color = "gainsboro";
    document.getElementById("NameDesc").style.color = "black";
    this.SortBy = 3
    this.Search()
  }
  SortBYEmailAsc() {
    this.PageNumber = 0;

    document.getElementById("EmailAsc").style.color = "black";
    document.getElementById("EmailDesc").style.color = "gainsboro";
    this.SortBy = 4
    this.Search()

  }
  SortBYEmailDesc() {
    this.PageNumber = 0;

    document.getElementById("EmailAsc").style.color = "gainsboro";
    document.getElementById("EmailDesc").style.color = "black";
    this.SortBy = 5
    this.Search()

  }
  SortBYIDAsc() {
    this.PageNumber = 0;
    document.getElementById("IDAsc").style.color = "black";
    document.getElementById("IDdesc").style.color = "gainsboro";
    this.SortBy = 1
    this.Search()

  }
  SortBYIDDesc() {
    this.PageNumber = 0;
    document.getElementById("IDAsc").style.color = "gainsboro";
    document.getElementById("IDdesc").style.color = "black";
    this.SortBy = 0
    this.Search()

  }
  MoveTo(num) {
    this.PageIndex = num;
    this.Search()

  }

  GetMessage(ID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    let result = this.dialog.open(MsgdetailsComponent, {
      data: { ID: ID },
    });
    result.afterClosed().subscribe(result => { 
          
       this.inboxService.Seen(ID).subscribe(res=>{
         if(res.Successed)
         {
          this.Search()

         }
       })
    });

  }

  Seen(id) {

  }
}



