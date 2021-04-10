import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { userdefinedEmployee } from '../model.employee';
import { Fake } from '../model.fake';
import { FakeService } from '../service.fake';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
msg?:string
fakeData?:Array<Fake>
userData?:Array<Employee>
f1:boolean = false;
f2:boolean = false;
  constructor(public fakeSer:FakeService,public empser:userdefinedEmployee) { }

  ngOnInit(): void {
  }
fun()
{
  this.msg=this.fakeSer.sayHello()
}
callFake()
{
  this.fakeSer.callFakeService()
}

loadInTable()
{
 
this.f1 = true;
  this.fakeSer.displayFakeInTableFormate().subscribe(data=>this.fakeData=data)
}

loadInTable1()
{
  this.f2 = true;
  this.empser.userdefinedDisplay().subscribe(data=>this.userData=data)

}
}
