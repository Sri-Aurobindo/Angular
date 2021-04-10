import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http' ;
import { Observable } from "rxjs";
import { Fake } from "./model.fake";

@Injectable()
export class FakeService{

    constructor(public http:HttpClient){}
    static sayHello: any;
    sayHello():string{
        return "welcome to fake service with DI"
    }

    callFakeService()
    {
        this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data=>console.log(data),error=>console.log(error),()=>console.log("done"))
    }

    displayFakeInTableFormate():Observable<Fake[]>
    {
        return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos")
    }

    userdefinedDisplay():Observable<Employee[]>
    {
        return this.http.get<Fake[]>("http://localhost:3000/employees")
    }
}
