function sessionstore(params) {
    sessionStorage.setItem("obj1",100)
}

function sessionretrive(params) {
    console.log("<br/> session retrive data "+sessionStorage.getItem("obj1"))
}

function localstore(params) {
    localStorage.setItem("obj2",200)
}

function localretrive(params) {
    console.log("<br/> local retrive data "+localStorage.getItem("obj2"))
}