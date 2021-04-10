import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
msg=""
result:any=""
  constructor() { }

  ngOnInit(): void {
  }
fun()
{
  console.log("event generated")
  this.msg="welcome message displayed after button clicked"
}

passvalue(name:any)
{
console.log(name)
}

add(value1:any,value2:any)
{
  this.result=(eval(value1)+eval(value2))
}

sub(value1:any,value2:any)
{
  this.result=(eval(value1)-eval(value2))
}
}
