// Type conversion

console.log('This is type con');
let myVar;
// myVar = 35;
myVar = String(34);
// console.log(myVar, (typeof myVar));

let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = Date ();
// console.log(date, (typeof date));

let arr = String ([2,3,4,5,6,7]);
// console.log(arr.length, (typeof arr));

// let i = 8;
// console.log(i.toString());

let stri = '456';
stri = Number("435");
stri = Number(false);

// console.log(stri, (typeof stri));


// parseInt and parseFloat
let number = parseInt ('34');
// console.log (number, (typeof number));

// let numFloat = parseFloat (34.694);
// console.log (numFloat, (typeof numFloat));

// Using toFixed
// console.log(number.toFixed(28), (typeof number)); 

// type coercion

let mystr = "456";
let mynum = 67;

console.log(mystr + mynum);