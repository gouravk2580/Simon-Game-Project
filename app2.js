let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let btns = ["yellow", "green", "purple", "red"];

let h3 = document.querySelector("h3")
document.addEventListener("keypress", function(){
if(started == false){
    console.log("Game started");
    started = true; 
    
    levelup();
}

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}

function levelup(){
    userseq = [];
    level++;
h3.innerText = `Level ${level}`;
let randIdx = Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`)
// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);

gameseq.push(randColor);
console.log(gameseq);

btnFlash(randBtn);
}

function checkAns(idx){
// console.log(`curr level : ${level}`);
if(userseq[idx] == gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup, 1000);
    }

}else{
    h3.innerHTML = `Game Over! Your score was <b>${level}<b> <br> Press any Key to Start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout( ()=>{
        document.querySelector("body").style.backgroundColor = "white";
    }, 150)
    reset();
}


}

function btnPress(){
let btn = this;
btnFlash(btn);

usercolor = btn.getAttribute("id");
userseq.push(usercolor);

checkAns(userseq.length-1);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}