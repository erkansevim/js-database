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

