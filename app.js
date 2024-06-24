setTimeout(() => {
    console.log("I am Erkan");
}, 200);

console.log("who are you");


//---------

let sayac=0
const delayed=setInterval(() => {
    console.log(++sayac);

    if (sayac==7) {
        clearInterval(delayed)
    }
}, 1000);

//---------------------

const person={name:"erkan", surname:"sevim"}

new Promise ((resolve, reject)=>{
    if (true) {
        resolve(person)
    }
    else{
        reject(new Error("promise unsuccesfull"))
    }
}).then((response)=>console.log(response)).catch((error)=>console.log(error))