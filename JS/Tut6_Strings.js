// Strings: Properties, Methods, Template Literals in JS

console.log('This is Tut 6');

const name = 'Navin';
const greeting = 'Good Morning';
// console.log(greeting+' '+name);

let html;

html = "<h1>This is heading </h1>" + 
        "<p> tHis Is my para</p>";

html = html.concat('this',  'str2');
// console.log(html.length);
// console.log(html.toLowerCase()); 
// console.log(html.toUpperCase()); 

// console.log(html[9]);

// Indexof
// // console.log(html.indexOf('h1'));
// console.log(html.charAt(3));
// console.log(html.endsWith('str2'));  
// // If this is yes the it return true else false return
// console.log(html.includes('This'));
// console.log(html.substring(0,7));
// console.log(html.slice(-6));
// console.log(html.slice(0,6));
// console.log(html.split(' '));
// console.log(html.replace('this', 'it'));

/*
here we are using templet literals. 
*/
let friut1 = 'Orange\'';
let friut2 = 'Mangoes';
let myHtml = `Hello ${name}
                <h1> This is Heading </h1>
                <p> You like ${friut1} and ${friut2}
`;
document.body.innerHTML = myHtml;