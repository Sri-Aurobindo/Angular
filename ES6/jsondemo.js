
let empStringFormat = '{"id":100, "name": "Ravi","skill":["Java", "Python", "Angular"],"add:{"city":"bangalore"}"}'

document.write(empStringFormat)
document.write("<br/>")
document.write("<br/>Id is "+empStringFormat.id) 
document.write("<br/>Name is "+empStringFormat.name)
let empJson = JSON.parse(empStringFormat);
document.write("<br> After conversion ") 
document.write("<br> Id is "+empJson.id)
document.write("<br> Name is "+empJson.name)
document.write("<br> Skill Details "+empJson.skill[0])
document.write("<br> Skill Details "+empJson.skill[1])
document.write("<br> Skill Details "+empJson.ski11[2])
document.write("<br> city "+empJson.add.city)