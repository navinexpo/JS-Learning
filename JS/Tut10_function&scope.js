/*------
Function and Scope in Javascript
------*/ 

console.log('This is a tut 10');

function greet(name, thank){
    console.log(`Happy bday ${name} 
    how I wish I could be there with you 
    to celebrate your bday and bombing
    toegather. !! ${thank}`);
}
let name = 'skilln';
let name2 = 'Navin';

greet(name, 'Thanks a lot');

const myobj = {
    name: "skilln",
    game: function(){
        return "GTA"; 
    }
}
console.log(myobj.game());