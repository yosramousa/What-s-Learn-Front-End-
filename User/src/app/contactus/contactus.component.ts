import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/Service/message.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private messageService:MessageService,private toastr: ToastrService,private rout:Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)

  }
  Url=`${environment.api_url}Uploads/`


  FullName:string
  Email:string;
  Subject:string;
  Text:string;

  SendMessage(){
    let message ={
      ID:0,
      FullName:this.FullName,
      Email:this.Email,
      Subject :this.Subject,
      Text:this.Text
    }
    this.messageService.SendMessage(message).subscribe(res=>
      { 
        console.log(res.Successed)
        if(res.Successed)
        {
        var query = document.getElementsByTagName("input")
        this.FullName = ""
        this.Email =""
        this.Subject=""
        this.Text=""
        this.toastr.success("Message Sent Successfully", '', {
          timeOut: 1000, easeTime: 1000
        }).onHidden.subscribe(() => {
          this.rout.navigate(['/home'])


        })

        }
        else
        {
          this.toastr.error("Message Faild Sent")

        }
        
      }
      )
  }
 
}
