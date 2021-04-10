//fetch("https://api.mocki.io/v1/b043df5a").then(data=>console.log(data)).catch(error=>console.log(error))

fetch("https://api.mocki.io/v1/b043df5a").then(response=>response.json()).
then(data=>document.write("city "+data[0].city)).catch(error=>console.log(error))

//display all records one by one

fetch("https://api.mocki.io/v1/b043df5a").then(response=>response.json()).
then(data=>{

    for(let i=0;i<4;i++)
    {
        document.write("<br/> city "+data[i].city)
    }
})