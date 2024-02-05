/* Foreach() - changes the content in side old array*/
let array111 = ["apple","bananan","orange"];

array111.forEach(seperate);
function seperate(element){
    console.log(element);
}

array111.forEach(touppercsefstlet);
array111.forEach(seperate);

function touppercsefstlet(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function seperate(element){
    console.log(element);
}

array111.forEach(touppercse);
array111.forEach(seperate);

function touppercse(element,index,array){
    array[index] = element.toUpperCase();
}
function seperate(element){
    console.log(element);
}
console.log(array111);

/*map() - stores the data in new array and can access the old array*/

const array222 = [1,2,3,4,5,6];

console.log(array222.map(squr));

function squr(element){
    return Math.pow(element,2);
}
console.log(array222);

const array333 = ["kabi","kavin","irfan"];
console.log(array333.map(uprcse));
function uprcse(element){
    return element.toUpperCase();
}

/* filter() - creates a new array by filter on based on certain condition*/
let array444 = [1,2,3,4,5,6,7,8,9,10];
console.log(array444.filter(oddn));
function oddn(element){
    return element%2 !== 0;
}

let array555 = [11,44,55,33,16,18];
let filtagearray = array555.filter(filtage);
let filtagearray2 = array555.filter(filtage2);
console.log(filtagearray);
console.log(filtagearray2);
function filtage(element){
    return element<=30;
}
function filtage2(element){
    return element>=30;
}

let array666 = ["array","banana","apple","AlfaRomeo","caterpul","frog"];
let filtebyletter = array666.filter(filtbylet);
console.log(filtebyletter);
function filtbylet(element){
    return element.charAt(0)==="a"||"A";
}