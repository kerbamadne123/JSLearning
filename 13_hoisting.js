console.log(myName);
//console.log(age); // 
var myName = "Virat Kohli";
let age=23;
show();// Not allowed as it is normal function are  hosting

function show(){
    console.log("show() function");
}
//greet() Not allowed as it is FE and FE does not hosting
var greet=function(){
    console.log("Good Morning");
}
greet();