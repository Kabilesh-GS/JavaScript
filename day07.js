/* Reduce function()*/
let array999 = [1,2,3,4,5,6,7];

console.log(array999.reduce(addingall));

function addingall(accumulator,element){
    return accumulator + element;
}

/* function variables*/
// no function name needed can declare directly within an oblect
let array1111=[1,2,3,4,5,6,7,8,9,10];

console.log(array1111.map(function(element){return Math.pow(element, 3)}));

console.log(array1111.filter(function(element){return element % 2 != 0}));

array1111.forEach(function(element,index,array){console.log(array[index] = element * 6)});

console.log(array1111.reduce(function(accumulator,element){return accumulator + element}));

/* Arrow functions */
//simple way to write a function

let array3333 = [2,4,6,9,10,12,14,16,18,20];
let arrayarrow = array3333.reduce((accumulator,element)=> accumulator+element);
console.log(arrayarrow);

console.log(array3333.filter((element)=> element % 10 === 0));
console.log(array3333.forEach((element,index,array)=> console.log(array[index]=element*7)));

/*Clock*/

function updateclock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let sec = now.getSeconds();
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${sec}`;
}
updateclock();
setInterval(updateclock, 1000);
