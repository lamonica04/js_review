console.log("arrays.js");

// 1. two ways to craete an array
let value1 = [1, 2, 3];
let value2 = Array.of(4, 5, 6);
console.log(value1);
console.log(value2);

// 2.how to see if a variable is holding an array
let value3 = 7;
console.log(Array.isArray(value1));
console.log(Array.isArray(value3));

// 3. What data type is returned from an array with the typeof?
console.log(typeof(value1));
console.log(typeof(value3));

// What is an index in the context of an array?
// an index represent each element in an array. it starts at 0

// 5. Given the following array, const carMakes = ["Honda", "Toyota", "Mazda"]
const carMakes = ["Honda", "Toyota", "Mazda"];
carMakes.push("Mercedes");
console.log(carMakes);
carMakes.unshift("BMW");
console.log(carMakes);
console.log(carMakes[2]);

// 6. Using a built in array method, create a new array from the first 3 values in the carMakes array and store it in a new variable.
const newCarMakes = carMakes.slice(0,3);
console.log(newCarMakes);
console.log(carMakes);

// 7. Using built-in Array Methods and working with this array
const ericInfo = ["Eric", "Senior Instructor", "Florida"];
console.log(ericInfo);
ericInfo.splice(0,1);
console.log(ericInfo);
ericInfo[1] = "South Caronlina";
console.log(ericInfo);
ericInfo.push("Schwartz");
console.log(ericInfo);

// 8. Print "apple"
const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
  ["strawberry", "grape"],
  ["rambutan", "durian"],
  ["orange", "apple"]
];
const fruits3 = [
  ["strawberry", ["pineapple"]],
  ["grape", ["pear", ["apple"], "kiwi"]]
];
console.log(fruits1[0]);
console.log(fruits2[2][1]);
console.log(fruits3[1][1][1][0]);

// 9. Loop through the following array with a for() or while() loop printing each name to the console.
const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]
for (let i=0; i < studentsArray.length; i++){
    console.log(studentsArray[i]);
};

// 10. Loop through the following array with the forEach() Array method printing each name and the names index to the console.
// const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"] 
studentsArray.forEach(function(element, index) {
    console.log(`${index} : ${element}`);
});

// 11.Using the the map Array method square every number in the following array and save the results to a new array called numbersSquaredArray.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersSquaredArray = numbersArray.map(element => element*element);
// const numbersSquaredArray = numbersArray.map(function(element) {
//     return element * element
// });
console.log(numbersSquaredArray)

// function myFunction(value, index, array) {
//   return value * value;
// };
// console.log(numbersArray);
// console.log(numbersSquaredArray);

// 12.Using a looping method of your choice, loop over and sum all the values the new numbersSqauredArray storing the sum in a variable named arraySum
let arraySum=0;
for (let i=0; i < numbersSquaredArray.length; i++){
    arraySum += numbersSquaredArray[i];
};
console.log(arraySum);

//13. 
const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];
let index = starWarsCharactersArray.indexOf('Luke Skywalker');
if(index >= 0){
    console.log("13 Luke Sywalker index is " + index) 
} else console.log("not in array");

// console.log("13 Luke Sywalker index is " + starWarsCharactersArray.indexOf('Luke Skywalker'));

