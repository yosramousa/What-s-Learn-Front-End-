import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
  import { Router, ActivatedRoute } from '@angular/router';
  import { HomeService } from 'src/Service/home.service';
  import { environment } from 'src/environments/environment';
  import { FormControl } from '@angular/forms';
  
  
@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {
  
  @Component({
    selector: 'app-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css']
  })
    public CategoryFormControl = new FormControl("");
    popoverTitle :string; 
    popoverMessage :string
    confirmClicked :boolean;
    cancelClicked :boolean;
    confirmButtonType:string
  
    ID
  PageIndex=0
  PageSize=6
  Track
  Documents:[]
  Links:[]
  Vedios:[]
  Courses:[]
  Url=`${environment.api_url}Uploads/`
    constructor(private router:Router ,private route:ActivatedRoute,private homeService:HomeService
      , private renderer : Renderer2, private element : ElementRef
      ) 
      { 
        this.popoverTitle = 'Confirm';
        this.popoverMessage = 'Are you sure to Enroll this Track ';
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
     
  }
  
