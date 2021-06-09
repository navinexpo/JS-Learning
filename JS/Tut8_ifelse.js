console.log('This is Tut 8');
const age = 7;
// const vari = 34;
const doesDrive = true;

// // if(age==19){
// //     console.log('Age is 19')
// //     // === check type and value both 
// //     /* we have age!= and !== if value and type is not matching*/
// // }else if(age==65){
// //     console.log('Age is 65, You can prcceed')
// // }else{
// //     console.log('Age is not 19')
// // };

// if(age == 19){
//     console.log('Age is 19')
// }
// if(age !== 65){
//     console.log('Age is not 65')
// }else{
//     console.log('Age is not 19')
// }

// // While you want to check the vari is exists or not

// if (typeof vari !== `undefined`){
//     console.log('vari is defined');
// }else{
//     console.log('Vari is not defined');
// }


/*&& means both conditions must be true
   || - any one can be true then you will get return true value 
*/ 
// if(doesDrive && age>18){
//     console.log("YOu can drive");
// }else if(doesDrive || age>60){
//         console.log("You are in risk");
// }else{
//     console.log("You cannot drive");
// }


/*Turnary operator */
// console.log(age==45? 'Age is 45' : 'Age is not 45');

/*Switch Case Condition*/

switch (18){
    case 18:
        console.log("You are 18");
        break;

    case 32:
        console.log("You are in risk");
        break;

    default:
        console.log("You are known");
        break;
}