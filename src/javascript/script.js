const q1 = document.getElementById("#question1");
const q2 = document.getElementById("#question2");
const q3 = document.getElementById("#question3");
const q4 = document.getElementById("#question4");

let a1 = document.querySelector("#answer1");
let a2 = document.querySelector("#answer2");
let a3 = document.querySelector("#answer3");
let a4 = document.querySelector("#answer4");

q1.onclick = function(){
    a1.style.display = "block";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
}

q2.onclick = function(){
    a1.style.display = "none";
    a2.style.display = "block";
    a3.style.display = "none";
    a4.style.display = "none";
}

q3.onclick = function(){
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "block";
    a4.style.display = "none";
}

q4.onclick = function(){
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "block";
}