import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'What-s-Learn-User-PanalV1';

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

  
}


