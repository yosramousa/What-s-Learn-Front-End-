import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileService } from 'src/Service/profile.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddlinkComponent } from '../addlink/addlink.component';
import { EditCertificateService } from 'src/Service/edit-certificate.service';
import { UserSkillService } from 'src/Service/user-skill.service';
import { AddcertificateComponent } from '../addcertificate/addcertificate.component';
import { CertificatePopupComponent } from '../certificate-popup/certificate-popup.component';
import { AddskillComponent } from '../addskill/addskill.component';
import { SkillPopupComponent } from '../skill-popup/skill-popup.component';
import { LinkPopupComponent } from '../link-popup/link-popup.component';
import { ImgcertificateComponent } from '../imgcertificate/imgcertificate.component';
import { UserLinkService } from 'src/Service/user-link.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  [x: string]: any;

  User
  Url = `${environment.api_url}Uploads/`

  public CategoryFormControl = new FormControl("");
  popoverTitle: string;
  popoverMessage: string
  confirmClicked: boolean;
  cancelClicked: boolean;
  confirmButtonType: string

  constructor(private profileService: ProfileService, private router: Router,
    private toastr: ToastrService,

    private userCertificateService: EditCertificateService,
    private userSkillService: UserSkillService,
    private userLinkServoce: UserLinkService,
    private renderer: Renderer2, private element: ElementRef, private dialog: MatDialog,) {
    this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Are you sure to Enroll this Track ';
    this.confirmClicked = false;
    this.cancelClicked = false;
  }
  UserCerts
  Title
  UserID
  Image
  ImageSrc
  Images: FileList
  SkillsView: [{ ID: number, skill: string }]
  SkillChoosen: { ID: number, skill: string }
  LevelEdited: number
  Level: number
  UserSkill
  //  UserID = +localStorage.getItem("UserID")
  UserName = localStorage.getItem("UserName")
  UserLinks

  Link: string
  ngOnInit(): void {
    this.GetProfile()
    window.scrollTo(0, 0)

    this.UserID = localStorage.getItem('UserID')
    this.userCertificateService.GetUserCert().subscribe(res => {
      this.UserCerts = res.Data
      console.log(this.UserCerts)
    })
    window.scrollTo(0, 0)

  }

  GetProfile() {
    this.profileService.GetProfile().subscribe(res => {
      if (res.Successed) {
        this.User = res.Data

        console.log("user", res.Data)
        //console.log(this.User.Tracks[0]==this.User.Tracks[1])
        console.log(this.User.Tracks)
      }

    }, er => {
      console.log(er)

    })
  }

  EditProfile() {
    this.router.navigate(['/edit-profile'])
  }
  EditSkill(skill) {
    // this.router.navigate(['/edit-user-skill'])
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%"
    dialogConfig.height = "50%"


    let result = this.dialog.open(SkillPopupComponent, {
      width: '35%',
      height: '35%',
      data: { Skill: skill },
    });

    result.afterClosed().subscribe(result => {
      //  this.UserLinks[this.UserLinks.indexOf(link)] = result
      //  console.log(result)


    });
  }
  EditCertificate(cert) {
console.log("ediiiit")
    // this.router.navigate(['/edit-user-skill'])
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%"
    dialogConfig.height = "50%"


    let result = this.dialog.open(CertificatePopupComponent, {
      width: '45%',
      height: '40%',
      data: { Certificate: cert },
    });

    result.afterClosed().subscribe(result => {
      //  this.UserLinks[this.UserLinks.indexOf(link)] = result
      //  console.log(result)
    });

  }
  EditLink(link) {
    // this.router.navigate(['/edit-user-skill'])
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%"
    dialogConfig.height = "50%"


    let result = this.dialog.open(LinkPopupComponent, {
      width: '30%',
      height: '30%',
      data: { Link: link },
    });

    result.afterClosed().subscribe(result => {
      //  this.UserLinks[this.UserLinks.indexOf(link)] = result
      //  console.log(result)
    });

  }
  AddSkill() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%"
    dialogConfig.height = "25%"


    let result = this.dialog.open(AddskillComponent, {
      width: '45%',
      height: '23%',
      // data: { Link: link },
    });

    // result.afterClosed().subscribe(result => {
    //  //  this.UserLinks[this.UserLinks.indexOf(link)] = result
    //  //  console.log(result)
    // });
    result.afterClosed().subscribe(result => {
      if(result){

      this.User.Skills.push(result)
      console.log("result", result)
      }
    });

  }
  AddCertificate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%"
    dialogConfig.height = "30%"
    let result = this.dialog.open(AddcertificateComponent, {
      width: '45%',
      height: '40%',

    });
    result.afterClosed().subscribe(result => {
        if(result){
      this.User.Certificates.push(result)
    }
    });

  }
  AddLink() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%"
    dialogConfig.height = "20%"



    let result = this.dialog.open(AddlinkComponent, {
      width: '30%',
      height: '20%',

    });

    result.afterClosed().subscribe(result => {
      if(result){

      this.User.Links.push(result)
      console.log(result)
        }
          });


  }
  Finished(courseID, TrackID, event) {
    console.log(event)
    this.profileService.FinishedCourse(courseID, TrackID).subscribe(res => {

      console.log(res)
      if (res.Successed) {

        this.toastr.success("You Successfully  Finshed This Course", '', {
          timeOut: 3000, easeTime: 1000
        })
        this.GetProfile()
      } else {
        event.target.checked = false;
      }
    })
  }

  GoToTrack(id) {
    this.router.navigate([`archieve/${id}`])
  }


  DeleteSkill(skill) {
    this.userSkillService.DeleteUserSkill(skill.ID).subscribe(res => {
      if (res == "UserSkill Deleted Sucessfully") {
        console.log(res)
        const index: number = this.User.Skills.indexOf(skill);
        if (index !== -1) {
          this.User.Skills.splice(index, 1);
          this.toaster.success("Skill  Deleted  Successfully", '', {

            easeTime: 1000,
            timeOut: 3000
          })

        }
      }
    })
  }
  DeleteCertificate(cert) {
    console.log(cert)
    this.userCertificateService.DeleteUserCert(cert.ID).subscribe(res => {
      if (res == "UserCertificate Deleted Sucessfully") {
        console.log(res)
        const index: number = this.User.Certificates.indexOf(cert);
        if (index !== -1) {
          this.User.Certificates.splice(index, 1);
          this.toaster.success("Certificate  Deleted Successfully", '', {

            easeTime: 1000,
            timeOut: 3000
          })


        }
      }
    })
  }
  DeleteLink(Link) {

    this.userLinkServoce.DeleteUserLinkl(Link.ID).subscribe(res => {
      if (res == "UserSocialLink Deleted Sucessfully") {
        console.log(res)
        const index: number = this.User.Links.indexOf(Link);
        if (index !== -1) {
          this.User.Links.splice(index, 1);
          this.toaster.success("Link  Deleted  Successfully", '', {

            easeTime: 1000,
            timeOut: 3000
          })

        }
      }
    })

  }


  AddImgCertificate(image) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%"
    dialogConfig.height = "50%"
    let result = this.dialog.open(ImgcertificateComponent, {
      width: '45%',
      height: '50%',
      data :{ certs:  image } 

    });
    //  result.afterClosed().subscribe(result => {
    //   this.User.Certificates.push(result) 
    //   console.log(result)
    // });
  }
}