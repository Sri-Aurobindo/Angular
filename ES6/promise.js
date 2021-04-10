//server

var con="yes"

let obj= new Promise((resolve,reject)=>{
    if(con="yes")
    {resolve("success resolve call")}
    else{
    reject("failure reject call")}
});


//client

obj.then(data=>console.log(" in then "+data)).catch(error=>console.log("in catch "+error))