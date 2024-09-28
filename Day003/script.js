//DOM

//1. Selection
var btn = document.querySelector("button");
btn.innerHTML = " Download ";
// btn.textContent = "<i> Arisha chaudhary</i>";

var h2=document.querySelector("h2");
h2.style.color='red';
// h2.style.fontFamily='gilroy';

var h1=document.createElement("h1");
h1.textContent = "arisha";

var btns = document.querySelector("button");
btns.addEventListener('click',function(){
    btns.textContent="Starting..."
})