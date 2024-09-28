var home = document.querySelector(".home");
var contact = document.querySelector(".contact");
var about = document.querySelector(".about");

var hometext = document.querySelector(".hometext");
var contacttext= document.querySelector(".contacttext");
var abouttext = document.querySelector(".abouttext");

home.addEventListener("click",function(){
    SareeTextHatto();
    hometext.style.display = "block";
    hometext.style.width = "80%";
    hometext.style.color="crimson";
    
})


contact.addEventListener("click",function(){
    SareeTextHatto();
    contacttext.style.display = "block";
    contacttext.style.width="80%";
    contacttext.style.color="Blue";
})


about.addEventListener("click",function(){
    SareeTextHatto();
    abouttext.style.display = "block";
    abouttext.style.width="80%";
    abouttext.style.color="brown";
})

function SareeTextHatto(){
    document.querySelectorAll("h3").forEach(function(h3) {
        h3.style.display="none";
        
    });

}