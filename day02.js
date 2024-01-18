//counter program
let incbtn = document.getElementById("inc");
let decbtn = document.getElementById("dec");
let resbtn = document.getElementById("res");
let numdis = document.getElementById("numberdisplay");
let count = 0;

incbtn.onclick = function(){
    count++;
    numdis.textContent = count;
}
decbtn.onclick = function(){
    count--;
    numdis.textContent = count;
}
resbtn.onclick = function(){
    count=0;
    numdis.textContent = count;
}

//Math functions
let xa = 3.456;
let ya= 8.456;
console.log(Math.floor(xa)); //round down
console.log(Math.ceil(xa)); //round up
console.log(Math.round(xa)); //round to nearest
console.log(Math.trunc(xa)); //removes decimal 
console.log(Math.max(xa,ya)); //returns max num
console.log(Math.min(xa,ya)); //returns min num

//random number generator from 0 to 4
let rand = Math.round(Math.random() * 4);
console.log(rand);
//random number generator from 10 to 40

document.getElementById("start").onclick = function(){
    let rando = Math.round(Math.random() * (40 - 10) + 10);
    document.getElementById("disn").innerHTML = `${rando}`;
}

//if statements
let isHuman = true;
let yearsold = 20;
if(isHuman){
    console.log("You are a human");
    if(yearsold<15){
        console.log("You are not a teenager");
    }
    else if(yearsold>=21){
        console.log("You are older than a teenager");
    }
    else{
        console.log("You are a teenager");
    }
}
else{
    console.log("You are not a human");
}

//switch

let mark = 600;
let feedback;

switch(true){
    case mark>100:
        feedback="Enter mark between 0 - 100";
        break;
    case mark>=90:
        feedback="Excellent";
        break;
    case mark>=80:
        feedback="very good";
        break;
    case mark>=60:
        feedback="good";    
        break;
    default:
        feedback="need improvement"
        break;
}
console.log(feedback);