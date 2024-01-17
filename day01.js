console.log("hello");

//comment
/*multi line comment*/

document.getElementById("para1").textContent = "hello I am Kabi";


//Variables
//Declaration and assignment
let x ;
x = 100;
// let x =100;
console.log(x);

let boxes = 19;
let rating = 4.44;

console.log(`There are ${boxes}`);
console.log(`the rating is ${rating}`);
//typeof gives the type of the variable
console.log(typeof rating);

//String
let Name = "Kabilesh";
console.log(typeof Name);
console.log(`Your name is ${Name}`);

//Boolean
let human = true;
let age = 19;
console.log(`Is he human : ${human}`);

document.getElementById("p1").textContent = `Your name is ${Name} and it is ${human} that he is an human, whose age is ${age}.`;

//Arithmetic operations
let a = 10;
//a=a+1; or a+=1; => increase by one
//a=a-1; or a-=1; => decrease by one
//a=a*8; or a*=2;
//a=a/5; or a/=3;
//a= a**2; or a**=2; power 2
//a = a%4; or a%=4; gives remainder
console.log(a); 
/*
operator precedence
    1. parenthesis ( )
    2. exponents
    3. multiplication & division & modulo
    4. addition subtraction
*/
let answer = 12 % 5 + 8 / 2;