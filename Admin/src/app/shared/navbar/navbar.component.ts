import { EnrollRequestService } from 'Services/enroll-request.service';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from 'app/pages/notification/notification.component';
import { environment } from 'environments/environment';
import * as signalR from "@aspnet/signalr";
import { ToastrService } from 'ngx-toastr';
 
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  // private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;
  Url=environment.api_url+"/Uploads/"
  public isCollapsed = true;
  @ViewChild("navbar-cmp", { static: false }) button;

  @ViewChild("div") mydiv: ElementRef

  Notifications = []
  constructor(
    private toastr: ToastrService,
    private dialog: MatDialog, location: Location, private renderer: Renderer2, private element: ElementRef, private router: Router
    ,
    private enrollRequestService: EnrollRequestService
  ) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = true;

  }
  Notification() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "50%";
    this.dialog.open(NotificationComponent, dialogConfig);
    // this.router.navigate(['/adminlayout/notification/'])

  }
  private connection: any;
  private proxy: any;
  private proxy2: any;
  
  AdminName:string





  realTimeConfig() {
    this.connection = $.hubConnection(environment.api_url);
    this.proxy = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy2 = this.connection.createHubProxy("WhatsLearnHub");

    this.proxy.on("GetEnrolledTrack", (obj) => {
      if (obj.UserName != undefined) {
        console.log("toast")
        this.toastr.info(`${obj.UserName} Request Enroll in ${obj.TrackName} Track`)
        this.toastr.warning(`${obj.UserName} Request Enroll in ${obj.TrackName} Track`)
      }
      const d2 = this.renderer.createElement('a');
      const text = this.renderer.createText(`${obj.UserName} Request Enroll in ${obj.TrackName}`);
      this.renderer.appendChild(d2, text);
      this.renderer.addClass(d2, "dropdown-item")
      this.renderer.appendChild(this.mydiv.nativeElement, d2);
      console.log("ok")
    });


    this.proxy2.on("MessageRecived", (obj) => {
      console.log("MessageRecived")
      if (obj.UserName != undefined) {
        console.log("toast")
        this.toastr.info(obj.PrefMessage,`${obj.UserName} Send New Message`)
        this.toastr.info(obj.PrefMessage,`${obj.UserName} Send New Message`)

        const d2 = this.renderer.createElement('a');
        const text = this.renderer.createText(`${obj.UserName} Send New Message`);
        this.renderer.appendChild(d2, text);
        this.renderer.addClass(d2, "dropdown-item")
        
        this.renderer.appendChild(this.mydiv.nativeElement, d2);
       
      }

    });


       this.connection.start({ withCredentials: false });
  }


  AdminImage
  ngOnInit() {
    this.AdminName=localStorage.getItem("AdminName");

    this.enrollRequestService.GetAll().subscribe(res => {

      if (res.Successed) {
        this.Notifications = res.Data
      }
    })

    this.AdminImage = localStorage.getItem("AdminImage")

    // this.listTitles = ROUTES.filter(listTitle => listTitle);
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
    });
    this.realTimeConfig();

  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    // for(var item = 0; item < this.listTitles.length; item++){
    //     if(this.listTitles[item].path === titlee){
    //         return this.listTitles[item].title;
    //     }
    // }
    return 'Dashboard';
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    html.classList.add('nav-open');
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'fixed';
    }
    this.sidebarVisible = true;
  };
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    if (window.innerWidth < 991) {
      setTimeout(function () {
        mainPanel.style.position = '';
      }, 500);
    }
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };
  collapse() {
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    //  console.log(navbar);
    if (!this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }

  }
  Logout() {
   
   // localStorage.clear();
   localStorage.removeItem("AdminToken")
   localStorage.removeItem("AdminID")
   localStorage.removeItem("AdminName")
   localStorage.removeItem("AdminEmail")
   localStorage.removeItem("AdminImage")

    this.router.navigate(['/adminregistration'])
  }
}
