//chain

fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>console.log(veri)
)

//-------

fetch("https://api.github.com/users").then((res)=>{
if (res.ok==false) {
    throw new Error ("url is not correct")
}
return res.json()
}

).then((data)=>printDisplay(data))

const printDisplay=(data)=>{
    data.forEach(person => {
        document.querySelector("section").innerHTML+=`
        <h1>${person.login} </h1>
        <img src=${person.avatar_url}/>
        <h3>${person.node_id} </h3>
        `
    });
}