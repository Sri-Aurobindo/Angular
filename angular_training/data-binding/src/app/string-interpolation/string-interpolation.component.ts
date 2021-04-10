import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  id:number=10
  name:string="rio"
  salary:number=40000
  constructor() { }

  ngOnInit(): void {
  }

  sayHello() :string {
    return" welcome to string interpolation"
  }

}
