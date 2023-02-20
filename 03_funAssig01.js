console.log("-------------------------first task----------------------------");
function showFirstName() {
  console.log("My firstName is:-kerba");
}
function showLastName() {
  console.log("My lastName is:-madne");
}
showFirstName();
showLastName();

console.log("-------------------------second task----------------------------");

function personalDatails(firstName, lastName, collegeName) {
    console.log("firstName:-",firstName,"lastName:-",lastName,"collegeName:-",collegeName);
}
personalDatails("kerba", "madne", "agpce");

console.log("-------------------------third task----------------------------");

var num1=1000;
var num2=2000;
var Str1="Virat";
var Str2="Anushka";

function swapValueDude(value1, value2) {
  console.log("Before Swap:-", value1, value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("After Swap:-", value1, value2);
return"Swapping variable successfully completed";

}
var swapvariableResult = swapValueDude(num1,num2);

var swapvariableResult = swapValueDude(Str1,Str2);


console.log("-------------------------forth task----------------------------");
 

function addThreeValues(num1,num2,num3){
   var sum= num1+num2+num3;
   return sum;
}
function addStringValues(str1,str2,str3){

    var sumStringValues=str1+str2+str3;
    return sumStringValues;
}

var addThreeValues=addThreeValues(10.23,600,40);
console.log(addThreeValues);

var addStringValues=addStringValues("Hello","Good","Morning");
console.log(addStringValues);




