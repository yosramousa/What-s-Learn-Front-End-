import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { InboxService } from 'Services/inbox.service';
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

  InboxMessages:{}
}
=======
  constructor(private inboxService: InboxService) { }

  PageSize = 10
  PageIndex = 0
  Messages: []
  SearchOption = 0
  SearchText
  SerachOptions = [
    { ID: 0, name: "Chose Search Options" },
    { ID: 1, name: "Name" },
    { ID: 2, name: "Email" },

  ];

  shows: number[] = [10, 15, 20, 25]

  ngOnInit(): void {
    this.inboxService.GetMessages(this.PageIndex, this.PageSize)
      .subscribe(res => {
        this.Messages = res.Data
      })

  }
  Search() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.inboxService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
      .subscribe(res => {
        this.Messages = res.Data;
        console.log(this.Messages)
      })
  }
  Next() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.PageIndex++;
    this.inboxService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
      .subscribe(res => {
        this.Messages = res.Data;
        console.log(this.Messages)
      })

  }
  Prev() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.PageIndex--;
    console.log(this.PageIndex);

    this.inboxService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
      .subscribe(res => {
        this.Messages = res.Data;
        console.log(this.Messages)
      })

  }

  Filter() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.inboxService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
      .subscribe(res => {

        this.Messages = res.Data;
      })
  }

  Delete(id) {
    this.inboxService.Delete(id).subscribe(res => {
      if (res) console.log("Deleted")
      if (!(this.SearchText || this.SearchOption)) {
        this.SearchOption = 0
        this.SearchText = " "
      }
      this.inboxService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
        .subscribe(res => {

          this.Messages = res.Data;
        })
    })
  }

  messageDatail :any
  MessageDetails(id){
   this.inboxService.GetByID(id).subscribe(res=>{
      this.messageDatail =res.Data
      console.log(this.messageDatail)
   }) 
  }
}


>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
