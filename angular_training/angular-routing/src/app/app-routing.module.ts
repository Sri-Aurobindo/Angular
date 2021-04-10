import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [

  {path:"about",component:AboutComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
