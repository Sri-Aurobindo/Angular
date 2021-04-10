class employee
{
    empname()
    {
        document.write("<br/> employee parent class")
    }
}

class manager extends employee
{
    mname()
    {
        document.write("<br/> manager child class")
    }
}

let e1 = new employee();
e1.empname();

let m1 = new manager
m1.mname()
m1.empname()