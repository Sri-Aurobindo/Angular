import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service.login';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
msg?:string;
fname?:string;
lname?:string
gender?:string
skillset?:string

  constructor() { }

  ngOnInit(): void {
  }
checkUser(loginRef:any)
{
  console.log("eventgenerated")
  console.log(loginRef)
  this.fname=loginRef.fname
let ls1 = new LoginService
ls1.checkUser1
  
}
}
