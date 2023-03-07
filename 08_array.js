var arrayOfNumber= [0,2,4,5,6,7,0,8];
 console.log(arrayOfNumber);
 //console.table(arrayOfNumber);
const TotalArrayElements=arrayOfNumber.length;
console.log(`Total elements availble is array is:${TotalArrayElements}`);
const is8available=arrayOfNumber.includes(8);
console.log(`is 8 availble is:${is8available}`);
const is9available=arrayOfNumber.includes(9);
console.log(`is 9 availble is:${is9available}`);

const indexof8=arrayOfNumber.indexOf(8);
console.log(`Index is 8 elements is:${indexof8}`);

const indexof100=arrayOfNumber.indexOf(100);
console.log(`Index is 100 elements is:${indexof100}`);

var arrayOfNumber = [10, 20, 25, 15, 30, 5];
const valueAtIndex=arrayOfNumber[2];
console.log(`value of index:${valueAtIndex}`);


var arrayOfNumber = [10, 20, 25, 15, 30, 5];
console.log("Adding element in the last using push()==");
arrayOfNumber.push(40);
console.log(arrayOfNumber);
console.log("Adding element in the first using unshift()==");
arrayOfNumber.unshift(5);
console.log(arrayOfNumber);

var arrayOfNumber = [10, 20, 25, 15, 30, 5];
console.log("==remove last element using pop()");
arrayOfNumber.pop(1);
console.log(arrayOfNumber);
console.log("==remove first element using shift()");
arrayOfNumber.shift();

var arrayOfNumber = [10, 20, 25, 15, 30, 5, 40, 45];
console.log("=======slice(startindex)=======");
const arrayindex3 = arrayOfNumber.slice(3);
console.log(arrayindex3);

console.log("=======slice(startindex,endindex)=======");
const subArray = arrayOfNumber.splice(2, 5);
console.log(subArray);

var arrayOfNumber = [10, 20, 25, 15, 40, 45];
console.log("=======slice(startindex)=======");
const sliceArray = arrayOfNumber.splice(3);
console.log(`remove elements from array is:${sliceArray}`);
console.log(arrayOfNumber);

var arrayOfNumber = [10, 20, 25, 15, 40, 45];
console.log("=======slice(startindex,endindex)=======");
const splicedeletCount = arrayOfNumber.splice(2, 2);
console.log(`remove elements from deleteount is:${splicedeletCount}`);
console.log(arrayOfNumber);

var arrayOfNumber = [10, 20, 25, 15, 40, 45];
const delet = arrayOfNumber.splice(1);
console.log(delet);
console.log(arrayOfNumber);

var arrayOfNumber = [10, 20, 25, 15, 40, 45];
arrayOfNumber.splice(3, 1);
console.log(`after removeing is 15: ${arrayOfNumber}`);

var arrayOfNumber = [10, 20, 25, 15, 40, 45];
arrayOfNumber.splice(1, 2);
console.log(`after removeing is 20 25: ${arrayOfNumber}`);

console.log(
  "=========splice() to insert one  elements whitout replacing element======="
);
var arrayOfNumber = [10, 20, 25, 15, 40, 45];
arrayOfNumber.splice(2, 0, 22);
console.log(arrayOfNumber);

console.log("=========splice() to insert one  elements whitout replacing element=======");
var arrayOfNumber = [10, 20, 25, 15, 40, 45];
arrayOfNumber.splice(4, 0, 5, 35, 55);
console.log(arrayOfNumber);



console.log("=========splice() to replace one  elements=======");
var arrayOfNumber = [10, 20, 25, 15, 40, 45];
arrayOfNumber.splice(2,1,50,60);
console.log(arrayOfNumber);
