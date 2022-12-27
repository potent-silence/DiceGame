var p1=prompt("Name of Player 1: ");
var p2=prompt("Name of Player 2: ");
document.querySelector(".p1 ").textContent=p1;
document.querySelector(".p2 ").textContent=p2;

function again(){
    var d1=document.querySelector(".img1 "),r1=Math.random();
    var d2=document.querySelector(".img2 "),r2=Math.random();
    r1*=6;r2*=6;
    r1=Math.floor(r1);r1++;
    r2=Math.floor(r2);r2++;
    d1.setAttribute("src","images/dice"+r1+".png");
    d2.setAttribute("src","images/dice"+r2+".png");
    var judgement=document.querySelector(".judge ");
    if(r1===r2){
        judgement.textContent="Try Again 😊! ";
    }
    else if(r1>r2){
        judgement.textContent="🚩 "+p1+" Wins!";
    }
    else{
        judgement.textContent=p2+" Wins! 🚩";
    }
}

document.querySelector("button").addEventListener("click",again);
