import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ManageAdminService } from 'app/manage-admin.service';
import { ActivatedRoute } from '@angular/router';
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  constructor(private myActivatedRoute: ActivatedRoute, private manageAdmin :ManageAdminService ) { }
Admin
  ngOnInit(): void {
    this.myActivatedRoute.snapshot.params['ID']
    this.manageAdmin.GetByID(this.myActivatedRoute.snapshot.params['ID']).subscribe(res=>{
     
      this.Admin = res.Data;
      console.log(this.Admin)
    })
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
  }

}
