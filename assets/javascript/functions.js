console.log("functions.js");

function greeting() {
    console.log("Hello World");
}
greeting();

function countingCharacters(value){
    if (value.length < 10) {
        console.log(value);
    } else {
        console.log("The value of " + value + " is too long.")
    }
}
countingCharacters("Nicole");
countingCharacters("Nicole LaMonica");

let diffMessage = "";
function difference(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        diffMessage = "Inputs(s) must be a number!";
    } else {
        diffMessage = Math.abs(num1 - num2);  
    }
    return diffMessage;
}
console.log(difference("hello", 3));
console.log(difference(3, 5));
console.log(difference(5, 1));

let advfMessage = "";
let advancedGreeting  = function(hour) {
    if (hour > 18 && hour < 24) {
        advMessage = "Good Evening";
    } else if (hour >= 12 && hour <= 18) {
        advMessage = "Good Afternoon";    
    } else if (hour < 12) {
        advMessage = "Good Morning";
    } else {
        advMessage = "Invalid Hour Input"
    }    
    return advMessage;
}
console.log(advancedGreeting("hello"));
console.log(advancedGreeting(3));
console.log(advancedGreeting(12));
console.log(advancedGreeting(18));
console.log(advancedGreeting(24));
console.log(advancedGreeting(20));
console.log(advancedGreeting(30));
console.log(advancedGreeting("1A"));
