import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  name:string="ajay kumar"
  age:number=25
  constructor() { }

  ngOnInit(): void {
  }

  sayHello()
  {
    return"function called success"
  }

}
