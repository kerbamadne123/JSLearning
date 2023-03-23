const arrayNumers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -609];
console.log("************************Step 1**************************");
arrayNumers.forEach((currentValue, index) => {
  console.log(`index:${index},   Elements:${currentValue}`);
});

console.log("************************Step 2**************************");

arrayNumers.forEach((element) => {
  if (element > 0) {
    console.log("Positive Array:", element);
  }
});

console.log("************************Step 3**************************");

arrayNumers.forEach((element) => {
  if (element < 0) {
    console.log("Negetive Array:", [element]);
  }
});

console.log("************************Step 4**************************");

arrayNumers.forEach(element=>{
    if(element%2==0){
        console.log("Even Number:",element);
    }
});
console.log("************************Step 5**************************");

let sum = 0;
arrayNumers.forEach((element) => {
  sum = sum + element;
});

console.log("Sum of Numbers:", sum);

console.log("************************Step 6**************************");

arrayNumers.forEach(function(currentValue,index) {
    if (index%2==0) {
  console.log(`index:${index},   Elements:${currentValue}`);

    }
 });
 

