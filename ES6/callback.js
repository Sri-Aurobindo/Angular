function sayHello(fname, callback)
{
    return "User , "+callback(fname);
}
    
function maleInfo(name)
 {   
    return "Welcome Mr. "+name;  
 }   
function femaleInfo(name)
{ 
       return "Welcome Miss "+name;
}
    
    
document.write(sayHello("Ramesh",maleInfo)); 
document.write("<br/>") 
document.write (sayHello( "Reeta", femaleInfo));
document.write("<br/>")


