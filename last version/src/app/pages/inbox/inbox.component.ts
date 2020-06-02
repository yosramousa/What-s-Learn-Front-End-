import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { EditskillComponent } from '../../pages/editskill/editskill.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MsgdetailsComponent } from '../msgdetails/msgdetails.component';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor( private dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  MsgDetails(id){
// alert("msa msa yara2oof");
const dialogConfig =new MatDialogConfig();
dialogConfig.autoFocus =true;
dialogConfig.disableClose =false;
dialogConfig.width ="600px";
dialogConfig.height ="150px";
this.dialog.open(MsgdetailsComponent,dialogConfig);
  }

}
