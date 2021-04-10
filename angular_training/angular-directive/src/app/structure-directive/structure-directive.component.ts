import { Component, OnInit } from '@angular/core';
import {Employee, Product} from '../employee.module';
@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
flag:boolean=false
show:string="show"
i=0
std:Array<string>=["rio","sri"]
employees : Array<Employee>=new Array();


constructor() {
  let emp1= new Employee (100, "Ramesh", 12000);
let emp2= new Employee(101, "Rajesh",15000);
let emp3 = new Employee(102, "Lokesh",18000);
let emp4 = new Employee(103, "Mahesh", 20000);


this.employees.push(emp1);
this.employees .push(emp2);
this.employees.push(emp3);
this.employees.push(emp4);
 }

  ngOnInit(): void {
  }

  display()
  {
    if(this.i%2==0){
    this.flag=false
    this.show="show"
    this.i++
  }
  else{
    this.flag=true
    this.show="hide"
    this.i++
  }
}

fun()
{
  this.flag=true
}

products : Array<Product>=new Array();
add(pid:any,pname:any,price:any)
{
  let p1 = new Product(pid,pname,price);

  this.products.push(p1);
}

flag2=false
display1()
{
this.flag2=true
}
clear()
{
  this.products.pop();
}

}
