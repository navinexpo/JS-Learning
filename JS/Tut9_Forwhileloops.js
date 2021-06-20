console.log('This is tut9');

/*Loops are the instruction that are repeat are self*/

/*General Loops: for, while, do-while
i =0 - intialize  and declartion the value
i<9 - give function to the i - apply condition
i++ - attribute will be goin to increment till 9 iteration 

*/

// for (let i=0; i<9; i++)
// {
//     console.log(i);
// }

// let j = 0;
// while(j<10){
//     console.log(j+1);
//     j +=1;
// }

// let n = 0;
// do{
//     console.log(n+1);
//     n +=1;
// }while(n<8);  

// let k = 0;
// do{
//     if(k===5){
//         break;
//     }
//     console.log(k+1);
//     k +=1;
// }while(k<10);

// console.log('done');

/* 
continue statement
To return in loop's . 
once hit on 5 while compiling and toches.. 
dont execute further iteration. and go back on start.
6 wont print. 

when you want to go out of the loop  use - break 

*/
let arr = [2,4,5,7,6];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
}); 


/*Create object by String*/
// let obj = {
//     name: "Navin kuk",
//     age: 22,
//     type: "A programmer",
//     OS: "Win10"
// }
// for (let key in obj) {
//     console.log(`The ${key} of object is ${obj[key]}`)
// }