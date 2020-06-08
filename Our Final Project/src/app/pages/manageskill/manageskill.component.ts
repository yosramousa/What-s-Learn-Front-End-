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
  SortBy = 0;
  PageNumber
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
  count
  NumOfPages
  numbers
  GetAll() {

    this.ManagSkillServis.GetAll(this.SortBy,this.PageIndex, this.PageSize).subscribe(res => {
      if (res.Successed) {
        //  this.IsDeleted = false

        console.log("Ok")
        console.log(res)
        this.Skills = res.Data
        this.count = res.Count
        this.NumOfPages = Math.round(this.count / this.PageSize)
        this.numbers = Array(this.NumOfPages).fill(1).map((x, i) => i);

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
    SortBYNameAsc() {
      this.PageNumber = 0;
  
      document.getElementById("NameAsc").style.color = "black";
      document.getElementById("NameDesc").style.color = "gainsboro";
      this.SortBy = 2;
      this. GetAll()
    }
    SortBYNameDesc() {
      this.PageNumber = 0;
  
      document.getElementById("NameAsc").style.color = "gainsboro";
      document.getElementById("NameDesc").style.color = "black";
      this.SortBy = 3
      this. GetAll()
  
  
    }
   
    SortBYIDAsc() {
      this.PageNumber = 0;
      document.getElementById("IDAsc").style.color = "black";
      document.getElementById("IDdesc").style.color = "gainsboro";
      this.SortBy = 0
      this. GetAll()
  
    }
    SortBYIDDesc() {
      this.PageNumber = 0;
  
      document.getElementById("IDAsc").style.color = "gainsboro";
      document.getElementById("IDdesc").style.color = "black";
      this.SortBy = 1
      this. GetAll()
  
    }
    MoveTo(num) {
      this.PageNumber = num;
      this. GetAll()
  
    }

}



