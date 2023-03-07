console.log(`Given Array is:`);

var arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arraySeasonalFruits);
console.log("******************Step 1*******************");

const valueOfFirstIndex = arraySeasonalFruits[0];
console.log(`First element Given Array is:`);
console.log(valueOfFirstIndex);
console.log("******************Step 2*******************");

const valueOfLastIndex = arraySeasonalFruits[4];
console.log(`Last element Given Array is:`);
console.log(valueOfLastIndex);
console.log("******************Step 3*******************");

var arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("==Adding elements in the first using unshift()===");
arraySeasonalFruits.unshift("papaya");
console.log(arraySeasonalFruits);
console.log("******************Step 4*******************");
var arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("==removeing elements in the first using unshift()===");
arraySeasonalFruits.pop(`Mango`);
console.log(arraySeasonalFruits);
console.log("******************Step 5*******************");
console.log("====Add Element or insert element using push()======");
arraySeasonalFruits.push("Pineapple");
console.log(arraySeasonalFruits);

console.log("******************Step 6*******************");
console.log("===Insert an element Before is splice()======");
arraySeasonalFruits.splice(4, 0, "Dragon Fruit");
console.log(arraySeasonalFruits);

console.log("******************Step 7*******************");
console.log("Replace of element using splice()");
arraySeasonalFruits.splice(1, 1, "Kiwi");
console.log(arraySeasonalFruits);
console.log("******************Step 8*******************");
console.log("Log the Element Starting Index using splice()");
arraySeasonalFruits.splice(4);
console.log(arraySeasonalFruits);
console.log("******************Step 9*******************");
console.log("Only last 3 Element Starting Index using splice()");
var arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arraySeasonalFruits.slice(2, 5));
