console.log("objects.js");

// 1 & 2 Create an object that represents a person
// Add a method called sayHello
let person = {
    name: "Brianna",
    age: 26,
    favoriteColor: "pink",
    sayHello: function() {
        console.log(`2. Hello, My name is ${person.name}. I am ${person.age} years old and my favorite color is ${person.favoriteColor}.`);
    }
};

console.log(`1. Hello, My name is ${person.name}. I am ${person.age} years old and my favorite color is ${person.favoriteColor}.`);

person.sayHello();

// 3. Given the object below that represents a student, add a method averageGrade
// 4. add printDetails
let studentBob = {
    name: "bob",
    age: 23,
    major: "Psychology",
    grades: [70, 92, 84, 75, 100],
    averageGrade: function(){
        let gradeTotal = 0;
        this.grades.forEach(function(value){
           gradeTotal += value;
        });
        return gradeTotal / this.grades.length
    },
    printDetails: function() {
        console.log(`Hello, My name is ${this.name} and I am a student. 
        I am ${this.age} years old and my major is ${this.major}. 
        My current average grage is ${this.averageGrade()}.`);
    }
}
 console.log(studentBob.averageGrade());
 studentBob.printDetails();

//  5. Loop through the following array of objects and print out the name property of each object to the console.
const charactersArray = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


for (const property in charactersArray){
    console.log(`Name: ${charactersArray[property].name.toUpperCase()}`);
};

const filteredCharactersArray = charactersArray.filter(x => x.mass > 80);
for (const property in filteredCharactersArray){
    console.log(`Filtered Name: ${filteredCharactersArray[property].name.toUpperCase()}`);
};

const characterNames = charactersArray.map(element => element.name);
console.log(characterNames);

function checkEyeColor(arr, color) {
    const found = arr.some(el => el.eye_color === color);
    if (found) {
        console.log(`Some characters have ${color} eyes.`);
    } else { 
        console.log(`No characters have ${color} eyes.`);
    } 
  };
 checkEyeColor(charactersArray, "blue");
 checkEyeColor(charactersArray, "purple");

 function checkGender(arr, g) {
    const found = arr.every(el => el.gender === g);
    if (found) {
        console.log(`All characters are ${g}.`);
    } else { 
        console.log(`Not all characters are ${g}.`);
    } 
  };
 checkGender(charactersArray, "male");
 checkGender(charactersArray, "female");

 let massTotal = 0;
 for (i=0; i<charactersArray.length; i++ ){
    massTotal += Number.parseFloat(charactersArray[i].mass);
    console.log("mass = " + massTotal);
    }
 console.log("Mass total is " + massTotal);

 let totalMass = charactersArray.reduce(function(runningTotal, character) {
     return runningTotal += parseInt(character.mass);
 }, 0); 

 console.log("Total Mass is " + totalMass);
 

 function tagFavorite(arr, fave) {
    for (i=0; i<arr.length; i++ ){
        arr[i].favoriteCharacter= false;
        if (arr[i].name === fave){
            console.log("true");
            arr[i].favoriteCharacter = true; 
        }
    }
  }

  tagFavorite(charactersArray, "Leia Organa");
  console.log(charactersArray);


