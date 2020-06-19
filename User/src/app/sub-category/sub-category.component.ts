import { HomeService } from 'src/Service/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
ID
PageIndex=0
PageSize=3
SubCat
Documents:[]
Links:[]
Vedios:[]
Childs:[]
Url=`${environment.api_url}Uploads/`

constructor(private router:Router ,private route:ActivatedRoute,private homeService:HomeService) { }
  options={ itemsPerPage:this.PageSize, currentPage:this.PageIndex, id :'pagination', totalItems:100 }

  ngOnInit(): void {
    console.log("ok")

    this.ID=this.route.snapshot.params["id"];
    console.log(this.ID)

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
    this.homeService.GetLevelDetails(this.ID,2,this.PageIndex,this.PageSize).subscribe(res=>{
      this.SubCat=res.Data.LevelDetails
      this.Childs=res.Data.Childs
      this.Documents=this.SubCat.Documents
      this.Links=this.SubCat.Links
      this.Vedios=this.SubCat.Vedios
      this.options.totalItems=res.Count;

      console.log("ok")
      console.log(this.Childs)




    },
    res=>{


    })
  }
  OpenFile(file)
  {
   
    window.open(`${environment.api_url}Uploads/${file}`);
  }
  TrackDetails(id)
  { 
   // alert("Track")
    this.router.navigate([`track/${id}`]);

  }
  

}
