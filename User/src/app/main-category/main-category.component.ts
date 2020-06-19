import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from 'src/Service/home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {
  ID: number
  PageSize = 3
  PageIndex = 0
  Category
  Documents: []
  Links: []
  Vedios: []
  Childs: []
  Url = `${environment.api_url}Uploads/`

  constructor(private homservice: HomeService, private rout: ActivatedRoute, private router: Router) { }
  options = { itemsPerPage: this.PageSize, currentPage: this.PageIndex, id: 'pagination', totalItems: 100 }
  ngOnInit(): void {
    // this.Documents.length
    this.ID = this.rout.snapshot.params["id"];
    console.log(this.ID)
    this.GetData()
    window.scrollTo(0, 0)
  }

  getNextPrevData(pageIndex) {
    this.PageIndex = pageIndex - 1;
    console.log("PageIndex", pageIndex)
    this.GetData();
    this.options.currentPage = pageIndex;
  }

  GetData() {
    this.homservice.GetLevelDetails(this.ID, 1, this.PageIndex, this.PageSize).subscribe(res => {
      if (res.Successed) {
        console.log("res", res)

        this.Category = res.Data.LevelDetails

        this.Childs = res.Data.Childs
        this.Documents = this.Category.Documents
        this.Links = this.Category.Links
        this.Vedios = this.Category.Vedios
        this.options.totalItems = res.Count;
        console.log("Vedios", this.Vedios)



      }

    })
  }
  SubDetails(id) {
    //alert(id)
    this.router.navigate([`sub-catogory/${id}`]);

  }
  OpenFile(file) {

    window.open(`${environment.api_url}Uploads/${file}`);
  }

}
