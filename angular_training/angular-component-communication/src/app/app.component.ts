import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-communication';
parent?:string
product:Array<string>=[]
age?:number;
displayName(name:any)
{
  this.parent=name
}

addproduct(productname:any)
{
  this.product.push(productname)
}


}
