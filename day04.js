/* Functions */
function hello(na,yrs){
    console.log(`hi iam ${na} and iam ${yrs} years old`);
}
hello("kabilesh",19);
hello("kabi",20);

function add(x,y){
    console.log(`the sum of ${x} and ${y} is ${x+y}`);
}
add(4,7);
add(5,5);

function oddoreven(k){
    if(k%2==0){
        console.log(`${k} is even`);
    }
    else{
        console.log(`${k} is odd`);
    }
}
oddoreven(10);
oddoreven(9);

/* Local scope */
function qq(){
    let q = 10; /* q is declared here is valid within this qq() function */
    console.log(q);
}
function qq1(){
    let q = 5; /* q is also declared here is valid within qq1() function */
    console.log(q);
}
qq1();

/* Global Variable */
let i = 10; /* i can be used in both function tt() and tt1() */

tt();

function tt(){
    console.log(i);
}
function tt1(){
    console.log(i);
}

/*Array*/
let carrs = ["benz","bmw","nissan"];
console.log(carrs);

console.log(carrs[1]);

carrs[3] = "Audi";
console.log(carrs);

carrs.push("pagani"); //add element to last
console.log(carrs);

carrs.pop(); //removes last amount
console.log(carrs);

carrs.unshift("Bugatti");
console.log(carrs);

console.log(carrs.length);

console.log(carrs.indexOf("Audi")); //index of length

for(let f = 0; f< carrs.length; f++){
    console.log(carrs[f]);
}

console.log(carrs.sort()); //sort in ascending order
console.log(carrs.sort().reverse()); //sort in reverse