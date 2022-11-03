import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../_services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:any;
msg:any;
message:any;
messageobj:any;

  constructor(private dataservices:DataService ,private http : HttpClient ,private route:Router) { 
     }

  ngOnInit(): void {
  }

  //user creation 
  signUP(user:any){
   this.dataservices.addUser(user.value).subscribe(result=>{this.msg=result;
    this.route.navigate(['/'])
  },(error)=>{this.messageobj=error.error.msg;this.message=this.messageobj})
}
}
