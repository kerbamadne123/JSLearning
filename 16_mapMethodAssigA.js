const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19]
const arrayConvert =[]
arrayNumbers.forEach((element)=>{
    arrayConvert.push(element+10);
})
console.log(`****************************************After Adding 10 In each Element of Array *********************************************************`);
console.log(arrayConvert);
const arraySquare =[]
arrayNumbers.forEach((element)=>{
    arraySquare.push(element**2);
})
console.log(`****************************************After Sqauring each Element of Array *********************************************************`);

console.log(arraySquare);
const arrayIndex =[]
//const Adding=0;
arrayNumbers.forEach((currentValue,index)=>{arrayIndex.push(currentValue+index)

})
console.log(`****************************************After Adding Index Value To  each Element of Array *********************************************************`);

console.log(arrayIndex)
