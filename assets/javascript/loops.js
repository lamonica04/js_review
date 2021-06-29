console.log("loops.js");

for (let i=0; i <= 100; i++) {
    console.log(i);
}

for (let i=0; i <= 100; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}

for (let i=100; i > 0; i--) {
    console.log(i);
}

for (let i=0; i <= 50; i++) {
    if ( (i % 2 !== 0)  && (i % 5 === 0) ) {
        console.log(i);
    }
}

let total = 0;
for (let i=1; i <= 10; i++) {
    total += 3
    }
console.log("for " + total);

let totalWhile = 0;
let count = 1;
while (count <=10) {
    totalWhile += 3;
    count++;
    }
console.log("while " + totalWhile);

for (let i=1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0 ) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


