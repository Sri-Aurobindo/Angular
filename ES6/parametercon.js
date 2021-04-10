class Person 
{
    name = "Ravi";
    age = 21;

    constructor(name = "unknown",age=18) 
    {

        this.name = name;
        this.age = age;
        document.write("<br> Object created. ...")
    }
     disPersonInfo()
     {
        document.write("<br/>person details");
        document.write("<br/>name "+this.name);
        document.write("<br/>age "+this.age);
    }
// this is optional in ES6
}
let p1 = new Person("rio");
p1.disPersonInfo();
let p2 = new Person("sri",17); 
p2.disPersonInfo();

let p3 = new Person(); 
p3.disPersonInfo();