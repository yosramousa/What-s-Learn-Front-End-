import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from 'src/Service/nav-bar.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { not } from '@angular/compiler/src/output/output_ast';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Url = `${environment.api_url}Uploads/`

  Categories: {}

  ParentID = 0
  Level = 1
  UserID
  IsUser
  IsVisitor
  
  constructor(private toastr: ToastrService, private router: Router, private nav: NavBarService, private navService: NavBarService) {

  }
  private connection: any;
  private proxy: any;
  private proxy2: any;
  private proxy3: any;
  private proxy4: any;
  private proxy5: any;

  notifiactions: []


  realTimeConfig() {

    this.connection = $.hubConnection(environment.api_url);
    this.proxy = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy2 = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy3 = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy4 = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy5 = this.connection.createHubProxy("WhatsLearnHub");
    this.proxy.on("GetApproval", (obj) => {
      console.log("Test")
      console.log(obj)
      if (obj.UserID == this.UserID) {
        console.log("toast")
        if (obj.UserID != undefined) {

          this.toastr.info(`you Successfully Enrolled in ${obj.TrackName} Track`)
          //   this.AddNotificatiins(`you Successfully Enrolled in ${obj.TrackName} Track`)

          //this.toastr.success("test")
          this.toastr.success(`you Successfully Enrolled in ${obj.TrackName} Track`)
          this.AddNotificatiins(`you Successfully Enrolled in ${obj.TrackName} Track`)

        }
      }


    });

    this.proxy2.on("GetNotApproved", (obj) => {
      console.log("Test")
      console.log(obj)
      if (obj.UserID == this.UserID) {
        console.log("toast", obj.UserID)
        if (obj.UserID != undefined) {
          this.AddNotificatiins(`your Request  to Enroll in ${obj.TrackName} Track  Is  Ignored `)

          this.toastr.warning(`your Request  to Enroll in ${obj.TrackName} Track  Is  Ignored `)


          //this.toastr.success("test")
          this.toastr.warning(`your Request  to Enroll in ${obj.TrackName} Track  Is  Ignored `)

        }
      }


    });

    this.proxy3.on("TrackAdd", (TrackName) => {
      if (TrackName != undefined) {
        this.AddNotificatiins(`${TrackName} Track  Is  Added  `)

        this.toastr.info(`${TrackName} Track  Is  Added  `)
        this.toastr.warning(`${TrackName} Track  Is  Added  `)

      }


    });

    this.proxy4.on("NewCourseAdded", (obj: any) => {
      let users: number[] = obj.Users
      console.log(obj.Users)
      let Isvaild = false
      users.forEach(x => {
        if (x == this.UserID)
          Isvaild = true
      })
      if (Isvaild) {
        console.log("ok")

        if (obj != undefined) {
          this.AddNotificatiins(`${obj.CourseName} Course is Added in ${obj.TrackName} Track `)


          this.toastr.info(`${obj.CourseName} Course is Added in ${obj.TrackName} Track `)


          //this.toastr.success("test")
          this.toastr.info(`${obj.CourseName} Course is Added in ${obj.TrackName} Track `)

        }
      }


    });
    this.connection.start({ withCredentials: false });
  }

  GetNotificatiins() {

    console.log("GetNotificatiins call")
    let UserId = localStorage.getItem("UserID")
    console.log("UserID ", UserId)
    if (UserId != null)
      this.notifiactions = JSON.parse(localStorage.getItem(UserId));
    console.log("GetNotificatiins", this.notifiactions)


  }
  //notifs: string[]  

  AddNotificatiins(notif) {
    console.log("AddNotificatiins  called")
    var UserId = localStorage.getItem("UserID")
    console.log("UserId", UserId)
    if (localStorage.getItem(UserId) == null) {
      console.log("no notifs in local")
      console.log(" new notif = ", notif)
      var data: string[] = new Array()
      data[0] = notif
      // this.notifs[0]=notif
      localStorage.setItem(UserId, JSON.stringify(data));
      console.log("localStorage >>", localStorage.getItem(UserId))
    }
    else {

      console.log("yes")

      var Usernotifs: string[] = JSON.parse(localStorage.getItem(UserId));
      Usernotifs.unshift(notif)
      localStorage.setItem(UserId, JSON.stringify(Usernotifs));
      console.log("new Usernotifs", Usernotifs)


    }
  }

  ngOnInit(): void {

    this.GetNotificatiins()

    this.UserID = localStorage.getItem("UserID")
    console.log("UserID", this.UserID)
    if (this.UserID) {
      this.IsUser = true
      this.IsVisitor = false
    }
    else {
      this.IsUser = false
      this.IsVisitor = true
    }
    console.log("Navbar")
    this.GetAll()
    window.scrollTo(0, 0)
    this.realTimeConfig()

  }
  SignOut() {


    // this.IsUser = this.nav.IsUser
    // console.log(this.IsUser)
    localStorage.removeItem("UserID")
    localStorage.removeItem("Token")
    localStorage.removeItem("UserName")
    localStorage.removeItem("UserEmail")

    // localStorage.clear();


    this.toastr.warning("Goodbye see you later", '', {
      timeOut: 100, easeTime: 1000
    }).onHidden.subscribe(() => {

      window.location.href = `${window.location.origin}/#/sign-in`

    })


    // this.router.navigate(['/sign-in'])
    console.log()
  }

  GetAll() {
    this.navService.GetData(1, this.Level).subscribe(res => {

      if (res.Successed) {
        console.log("ok")
        this.Categories = res.Data
        console.log(this.Categories)
      }
    })

  }
  CatDetails(id) {
    // alert(id)
    this.router.navigate([`/main-catogory/${id}`])

  }
  SubDetails(id) {
    // alert(id)
    this.router.navigate([`/sub-catogory/${id}`])

  }
  TrackDetails(id) {
    // alert(id)
    this.router.navigate([`/track/${id}`])

  }
}
