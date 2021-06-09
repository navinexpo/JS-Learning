/* 
1. Primitive Data type
    string - "navin"
    numbers - 34556
    boolean - true/false
    Null - to check the value is null intentinally 
    undefined - var name; -
    symbol - ES6
2. Reference Data type
    Arrays
    Objective Literals
    Functions
    Dates
    Dates
*/ 
let name = "navin";
console.log("My string is "+name);

const mobile = "Oppo";
console.log(mobile);

// typeof operator usage
console.log("data type is "+ (typeof name));
// numbers
let marks = 34;
console.log("data type is "+ (typeof marks));

// boolean
let isDriver = true;
console.log("data type is "+ (typeof isDriver));

// Null
let nullVar = null;
console.log("data type is "+ (typeof nullVar));

// undefined
let undef = undefined;
console.log("data type is "+ (typeof undef));

// Reference data types
myarr = [3,4,5,6];
console.log("data type is "+ (typeof myarr));

// Object Literals are down below
let Stmarks = {
    Navin: 89,
    Rohan: 54,
    Mahavir: 34
}
console.log(Stmarks);

function findName(){

}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);