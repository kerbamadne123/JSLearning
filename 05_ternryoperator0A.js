function greatnumber(value1, value2){
    console.log(`given number:${value1},${value2}`);
 var res=value1>value2?value1:value2;
  console.log(`greatest number is:${res}`);
  console.log("***********"); 
}
greatnumber(10,-10);
greatnumber(800,899);
function isEvenOrOdd(v1){
    console.log(`given number is:${v1}`);
    var res=v1%2==0?"even":"odd";
    console.log(`the given number ${v1} is ${res}`);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);
function isOddOrEven(v2){
    console.log(`given charactor is ${v2}`);
    var charlength=v2.length;
    console.log(`length of ${v2} is ${charlength}`);
    var oddEv=charlength%2==0?"even":"odd";
    console.log(`the given number is ${oddEv}`);
}
isOddOrEven("javascript");
isOddOrEven("developer");
isOddOrEven("google");
