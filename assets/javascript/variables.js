console.log("variables.js");

let account1 = "abc";
const accountMain = "Main Account";
var account2 = "def";

console.log("let account1 " + account1);
console.log("const accountMain " + accountMain);
console.log("var account2 " + account2);

account1 = "abc1";
account2 = "def2";

console.log("2 let account1 " + account1);
console.log("2 const accountMain " + accountMain);
console.log("2 var account2 " + account2);

let number1 = 123;
console.log("1. number1 = " + number1);

number1 += 15;
console.log("2. number1 = " + number1);

number1 -= 8;
console.log("3. number1 = " + number1);

let avg = (26 + 44 + 72 +86 +112) / 5;
console.log("4. avg = " + avg);

let theNumber = 14;
console.log("5a. " + theNumber++);

theNumber = 14;
console.log("5b. " + ++theNumber);

console.log("6. " + typeof theNumber);
