console.log("string.js");

let verb =  "runs";
let noun = "flower";
let adj = "pretty";
let color = "red";
let name = "Julie";

let madlib =  "Take one.\n" + name + " " + verb + " to get the " + adj + ", " + color + " " + noun + ".";
console.log(madlib);

let madlibLiteral = `Take two. 
${name} ${verb} to get the ${adj}, ${color} ${noun}.`;
console.log(madlibLiteral);