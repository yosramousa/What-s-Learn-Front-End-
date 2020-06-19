import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { HomeService } from 'src/Service/home.service';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  public CategoryFormControl = new FormControl("");
  popoverTitle :string; 
  popoverMessage :string
  confirmClicked :boolean;
  cancelClicked :boolean;
  confirmButtonType:string

  ID
PageIndex=0
PageSize=3
Track
Documents:[]
Links:[]
Vedios:[]
Courses:[]
Url=`${environment.api_url}Uploads/`
  constructor(private router:Router ,private route:ActivatedRoute,private homeService:HomeService
    , private renderer : Renderer2, private element : ElementRef,
    private toaster:ToastrService) 
    { 
      this.popoverTitle = 'Confirm';
      this.popoverMessage = 'Are you sure to Finish this Course ';
      this.confirmClicked = false;
       this.cancelClicked = false;
    }
 
 
  options={ itemsPerPage:this.PageSize, currentPage:this.PageIndex, id :'pagination', totalItems:100 }
  
  ngOnInit(): void {

    this.ID=this.route.snapshot.params["id"];

    this.GetData()
    window.scrollTo(0, 0)

  }
  getNextPrevData(pageIndex){
    this.PageIndex=pageIndex-1;
      console.log("PageIndex",pageIndex)
      this.GetData();
      this.options.currentPage= pageIndex;
    }
  GetData(){
    this.homeService.GetLevelDetails(this.ID,3,this.PageIndex,this.PageSize).subscribe(res=>{
      this.Track=res.Data.LevelDetails
      this.Courses=res.Data.Childs
      this.Documents=this.Track.Documents
      this.Links=this.Track.Links
      this.Vedios=this.Track.Vedios
   
      this.options.totalItems=res.Count;

      console.log(res.Data)




    },
    res=>{


    })
  }
  OpenFile(file)
  {
   
    window.open(`${environment.api_url}Uploads/${file}`);
  }
  Enroll(TRackID)
  {
    if(localStorage.getItem("UserID")){
    this.homeService.Enroll(TRackID).subscribe(res=>{
    console.log(res)
    if(res.Successed){
      this.toaster.success(res.Message,"Enrollment")
      this.router.navigate(['/profile'])
    }
    else{

      this.toaster.error(res.Message)


    }
    },er=>{

    }
    )}
    else{
      this.toaster.error("Please Sign in First","Enrollment")

      this.router.navigate(['/sign-in'])
    }

  }

}
