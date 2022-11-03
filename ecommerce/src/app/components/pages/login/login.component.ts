import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../../../_services/data.service';
import { Router } from '@angular/router';
import { AuthcheckService } from '../../../../_services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin:any;
  userInfo:any;

  //message to display
  message:any;
  messageobj:any;

  //getingtoken
  token:any;
  tokenObj:any;

  constructor(private dataservices:DataService ,private http:HttpClient,private route:Router,private tokenservices:AuthcheckService ) {}

  ngOnInit(): void {
  }

  //login function handling error
login(userlogin:any){

    this.dataservices.login(userlogin.value).subscribe((result)=>{ console.log(result);
      
      this.messageobj=result;this.message=this.messageobj.status;
      var email={
        email:userlogin.value.email
      };
      this.dataservices.getOne(email).subscribe((result)=>{this.userInfo=result})
      this.tokenObj=result;this.token=this.tokenObj.token
     this.tokenservices.gettingToken(this.token)
      console.log(userlogin.value)
      this.route.navigate(['/home'])

    },
    (error)=>{this.messageobj=error.error.msg;this.message=this.messageobj})
}

}
