let num=[10,20,30,40,50,60]

num.forEach(display)
//first method
function display(n)
{
    document.write("<br/> value of n "+n);
}

//second method
num.forEach(function display(n)
{
    document.write("<br/> value of n fun body "+n);
})

//third method
num.forEach(function (n)
{
    document.write("<br/> value of n anonymus fun "+n);
})

let sumoFNumber= (a, b)=>(a+b)
document.write("<br/> Sum of two number using arrow style "+sumoFNumber(100, 200)); 
let biggestNumber= (a, b)=> {
if(a>b){
return "a largest";}
else {
return "b largest";
}
}
document.write("<br/>Largest of two numbere "+biggestNumber(100, 200)) 

//es5 style

function car()
{
    this.id=100;
    this.name=function()
    {
        document.write("<br/>ES5 style ")
    }
}

var c1= new car();
c1.name


//es6 style
class employee
{
    emp(params) {
        id=100;
        name="emp";
        document.write("<br/>ES6 style ")
    }
}

let e1 = new employee();
e1.emp();

