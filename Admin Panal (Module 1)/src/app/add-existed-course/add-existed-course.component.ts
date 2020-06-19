import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ManageCategoryService } from 'Services/manage-category.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-existed-course',
  templateUrl: './add-existed-course.component.html',
  styleUrls: ['./add-existed-course.component.css']
})
export class AddExistedCourseComponent implements OnInit {
  Courses: []
  NewCourses=new Array()
  Level: number = 1;
  Levels = [
    { id: 1, name: "Main Category" },
    { id: 2, name: "Sub Category" },
    { id: 3, name: "Track" },
    { id: 4, name: "Course" },
    { id: 0, name: "Main Category Parent" }
  ]
  constructor(  private toastr: ToastrService,
 private router: Router, public dialogRef: MatDialogRef<AddExistedCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private manageCategoryService: ManageCategoryService) { }

  TrackID
  ngOnInit(): void {
    this.TrackID = this.data.ID

    this.manageCategoryService.GetCourses().subscribe(res => {
      if (res.Successed) {
        this.Courses = res.Data
      }
    })


  }
  AddNewCourse() {
    this.dialogRef.close();
    this.router.navigate(['/adminlayout/addcategory/' + this.TrackID + '/' + 3]);
  }
  save() {
    console.log(this.NewCourses)
    this.manageCategoryService.ADD(this.NewCourses).subscribe(res=>{

     if(res.Successed)
     {
      this.toastr.success("Course Added Successfully","Done",{

        easeTime:500,
        timeOut:4000
       })

       this.dialogRef.close();
     }
     else
     {
       this.toastr.error("Pleas Select Course !",'',{

        easeTime:500,
        timeOut:4000
        
       })

     }},err=>{
      this.toastr.error("Some Thisng went wrong Please Try Again",'',{
        easeTime:500,
        timeOut:4000
      
     })
  })
}

  Add(CourseID,event)
  {

    let c={ID:0,TrackID:this.TrackID,CourseID:CourseID}
    if(event.target.checked)
    {
      console.log("add")
         this.NewCourses.push(c)

    }
    else
    {
      console.log("remove")
      this.NewCourses.splice(this.NewCourses.indexOf(c),1)
    }

    

  }
}
