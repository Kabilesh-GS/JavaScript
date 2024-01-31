/* Spread  operator*/
let arrayss = [1,2,3,4,5,9,6];
console.log(Math.max(...arrayss));
console.log(Math.min(...arrayss));

let myname = "kabilesh";
let mynamearrays = [...myname]; //each letter is seperate elemant
console.log(mynamearrays);
let mynamearray = [myname]; //word is one element
console.log(mynamearray);

console.log(mynamearrays.join("-"));

let fruits = ["apple","banana","orange"];
let somemorefruits = ["cherry","mango"];
let addedones = [...fruits,...somemorefruits]; 
console.log(addedones);


/*call backs*/

goodbyefun(leavefun);

function hellofun(){
    console.log("hello");
}
function leavefun(){
    console.log("leave now!");
}
function goodbyefun(callback){
    console.log("good bye!");
    callback();
}

/* Element selectors */
//ID - Element
const headd = document.getElementById("headding001");
headd.style.backgroundColor = "lightblue";
headd.style.textAlign = "center";

//CLASS - HTML Collection
const fruits001 = document.getElementsByClassName("fruits");

for(let frr of fruits001){
    frr.style.color = "cyan";
}

//TAG NAME
const h4elem = document.getElementsByTagName("li");
for(let h4e of h4elem){
    h4e.style.backgroundColor = "brown";
    h4e.style.color = "cyan";
}

//QUERY SELECTOR - First match element
const querysel = document.querySelector(".names");
querysel.style.backgroundColor = "grey";

//QUERY SELECTOR ALL
const nam001 = document.querySelectorAll("names");