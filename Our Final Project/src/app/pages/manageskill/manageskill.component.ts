import { ManageSillService } from './../../../Services/manage-sill.service';
import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from 'app/messageservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageskill',
  templateUrl: './manageskill.component.html',
  styleUrls: ['./manageskill.component.css']
})
export class ManageskillComponent implements OnInit {

  PageIndex: number = 0
  PageSize: number = 10
  shows = [10, 15, 20, 25, 30]
  Skills: { ID, skill }[]
  Skill: string
  SkilID = null
  ISEdit = false
  IsDeleted = false
  IsAdded = false
  Isupdated = false;
  tableHeaders = [
    { ID: 0, Name: "ID" },
    { ID: 1, Name: "Skill" }
  ]
  constructor(private router: Router, private ManagSkillServis: ManageSillService) { }

  ngOnInit(): void {
    this.GetAll()
  }

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

    this.ManagSkillServis.GetAll(this.PageIndex, this.PageSize).subscribe(res => {
      if (res.Successed) {
        //  this.IsDeleted = false

        console.log("Ok")
        console.log(res)
        this.Skills = res.Data
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
        // this.GetAll();
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


  }
  Update() {
    this.ManagSkillServis.Update({ ID: 0, skill: this.Skill }).subscribe(res => {
      if (res.Successed) {
        console.log("ok")
        this.Isupdated = true
        setTimeout(() => {
          this.Isupdated = false
        }, 1000);
        this.Skills.push(res.Data)
        // this.GetAll();
      }
    }, err => {

    })


  }
}


