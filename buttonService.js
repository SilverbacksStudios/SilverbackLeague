var Rightbutton =document.getElementById("Rightbutton")
Rightbutton.addEventListener(click, function, useCapture)
function Rightbuttonclick(input){
    fetch('http://localhost:3000/')
    .then(commits => alert('pingis'));
}