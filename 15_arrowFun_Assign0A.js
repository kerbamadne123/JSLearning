console.log(`====arrow funtion with no args and no return value====`);
let arrowFun=()=>{
    console.log("Good Morning,Today is Monday");
};
arrowFun();
console.log(`===arrow function with args and no return value===`);
let multiply=(arg1,arg2,arg3=1)=>{
let res=arg1*arg2*arg3;
console.log(`multiplication of ${arg1},${arg2},${arg3} is ${res}`);
}
multiply(5,5,2);
multiply(10,4);
console.log(`===arrow function with args and return value====`);
let addition=(ar1,ar2,ar3,ar4,ar5)=>{
    add=ar1+ar2+ar3+ar4+ar5;
    return add;
}
let addRes=addition(100,100,200,349,756);
console.log(`addition of number is= ${addRes}`);
let strRes=addition("i am ", "learning ", "ES6 ", "feature ", "in depth");
console.log(`adition of string is= ${strRes}`);
