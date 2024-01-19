//string operations

let yourname = "kabilesh GS";

console.log(yourname.toUpperCase());
console.log(yourname.toLowerCase());
console.log(yourname.charAt(5));
console.log(yourname.indexOf("H"));
console.log(yourname.length);
console.log(yourname.slice(0,yourname.indexOf(" ")));
console.log(yourname.slice(yourname.indexOf(" ")));

//method chaining

console.log(yourname.slice(0,yourname.indexOf(" ")).toUpperCase() + yourname.slice(yourname.indexOf(" ")).toLowerCase());

//logical operators
/*  && and
    || or
    ! not 
    
    === strictly equal, the data type should also be the same*/

//for loops
for(let o=2; o<=10;o+=2){
    console.log(o);
}
for(let u=10;u>0;u-=2){
    console.log(u);
}