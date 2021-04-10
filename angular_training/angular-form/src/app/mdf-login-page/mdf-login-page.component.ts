import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service.login';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
loginRef1 = new FormGroup({
  user:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required])
})
loginRef = new FormGroup({
  user:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required])
})

msg?:string
  constructor() { }

  ngOnInit(): void {
  }
checkuser1()
{
  let user=this.loginRef1.get('user')?.value
  let password=this.loginRef1.get('password')?.value
  let ls2 = new LoginService
  ls2.checkUser1

  
}
}
