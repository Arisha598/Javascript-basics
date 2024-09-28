//Apply call and bind

const obj ={name : "arisha chaudhary"};
function abcd(){
    console.log(this);
}
abcd.call(obj)

//Apply 
const obj1 ={name : "arisha chaudhary"};
function abcd(a,b,c){
    console.log(this,a,b,c);
}
abcd.call(obj1,[1,2,3])

//Bind
const obj2 ={name : " JavaScript"};
function abcd(){
    console.log(this);
}
const badmaichalayangai = abcd.bind(obj2);
badmaichalayangai();

//Prototypal Inheritance
function human(name,age){
    this.name=name,
    this.age=age
}

const human1 = new human("arisha",22);
const human2 = new human("ajeet",52);



//Closure 

function counter(){
    var count =1;
    return function (){
        count++;
        console.log(count);
    }
}
var fun = counter();
fun();

var parent= document.querySelector(".parent");
parent.addEventListener("click",function(){
    console.log("working");
})