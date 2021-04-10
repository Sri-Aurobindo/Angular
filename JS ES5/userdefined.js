function Employee(id,name,age)
{
    this.id=id
    this.age=age
    this.name=name
    this.dis=function()
    {
        document.write("function inside function")
        document.write( "<br/>"+this.id)
        document.write( "<br/>"+ this.age)
        document.write( "<br/>"+this.name)

}
}

var emp1= new Employee(100,"Rio",20)
emp1.dis()
var emp2= new Employee(200,"Raj",21)
alert(emp1.id)
Employee.prototype.skill="java"
document.write("<br/>"+emp1.skill)
document.write("<br/>"+emp2.skill)
emp1.skill="Python"
document.write("<br/>"+emp1.skill)
document.write("<br/>"+emp2.skill)
