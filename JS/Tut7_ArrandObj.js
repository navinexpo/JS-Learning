console.log('This is Tut 7');

// Creating arrays
let marks = [34,67,89,43,12];
const fruits = ['oranges','apple','banana','mango'];
const mixed = ['str',82,[5,8]];

const arr = new Array(32,456,43, 'orange');
// console.log(marks);
// console.log('mixed');
// console.log(fruits[1]);
// console.log(Array.isArray('sdfd'));
arr[0] = 'Navin';
let arrelement = arr[0];
// console.log('element', arrelement);
let value = marks.indexOf(43); 
// console.log(value);

// Mutating or Modifiing arrarys
// marks.push(66);
// marks.unshift(321);
// marks.pop();
// marks.shift();
// marks.splice(1,4);
// marks.reverse();
let marks2 = [1,23,4,5]
marks = marks.concat(marks2);
// console.log(marks);

// OBJECTS
let myobj = {
    name: 'Navin',
    channel: 'Skilln',
    isActive: true,
    marks: [4,5,6,8]
}
// console.log(myobj);
// console.log(myobj.marks);
console.log(myobj.isActive);
console.log(myobj.channel);
console.log(moobj['name']);