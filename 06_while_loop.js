//WAP print 1 to 10 Number
let index=0;  // initialization
while (index<=10) { //condition
    console.log(index);
    index++;  //update expression
}
console.log("Even Number");
const arrayOfNumber=[10,20,25,15,40,45,60,40,30,22,26];

var index1=0;  // initialization
let sum=0;
while (index1<arrayOfNumber.length) { //condition
    const element=arrayOfNumber[index1];
    if (element%2==0) {
        console.log(element);
        sum=sum+element;
    }
   // console.log(arrayOfNumber[index1]);
    index1++;  //update expression
}