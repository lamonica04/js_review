console.log("conditionals.js");

let x = 20;
let y = 10;

if (x > y) {
    console.log("Hello World");
}

x = 10;
y = 20;
if (x > y) {
    console.log("Hello World");
} else {
    console.log("Goodbye World");
}

let number1 = 8;
let number2 = "9";

if("0" === 0){
    console.log("condition 1 is true")
}else if(number1 > number2){
    console.log("condition 2 is true")
}else if(typeof number2 === "number"){
    console.log("condition 3 is true")
}else if(typeof number2 !== "number" && number1 > number2){
    console.log("condition 4 is true")
}else if("0" == 0){
    console.log("condition 5 is true")
}else{
    console.log("no condition was true")
}

// function sayHello(name){

//     if(name) {
//         return `Hello, ${name}!`;
//     } else {
//         return "Hello, person!"
//     }

// }

// console.log( sayHello("Class") )

function sayHello(name){

    return (name) ? `Hello, ${name}!` : "Hello, person!";

}

console.log( sayHello("Class") )

// let soldOut = true;
// let onSale = true

// soldOut = !soldOut

// let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

// console.log(message);

let soldOut = true;
let onSale = true;
let message = "";

soldOut = !soldOut;

if (!soldOut && onSale) {
   message = "I got tickets too!";
} else {
   message =  "I did not get tickets - boo!";
}
console.log(message);