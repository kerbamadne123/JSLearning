//WAP to find first 15 odd numbers
//WAP to find first 10 even numbers
//WAP to  print table of 5 like 5 10 15 20 25 ....50.
//WAP to  print table of 10 like  10  20 30 40 ....100.
//WAP to  print table of 10 in reverse order like 100 90 80 70  ....10.


console.log("*************************Step 1*************************");
console.log("WAP to find first 15 odd numbers");

for (let index =0; index <=15; index++) {
if (index % 2 !=0) {
    console.log(index);    
 
}
}


console.log("*************************Step 2*************************");
console.log("WAP to find first 10 even numbers");
for (let index = 0; index <=10; index++) {
    if (index % 2 ==0) {
        console.log(index);
    }
    
}




console.log("*************************Step 3*************************");
console.log("WAP to  print table of 5 like 5 10 15 20 25 ....50.");

for (let index = 5; index <=50 ; index=index+5){
    console.log(index);                    

    
}


console.log("*************************Step 4*************************");
console.log("WAP to  print table of 10 like 10 20 30 40 ....100.");
for (let index = 10; index <=100; index=index+10) {
console.log(index);    
}

console.log("*************************Step 5*************************");
console.log("WAP to  print table of 10 in reverse order like 100 90 80 70  ....100.");
for (let index = 100; index >=10; index=index-10) {
    console.log(index);
10    
}


