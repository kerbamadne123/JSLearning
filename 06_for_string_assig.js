console.log("(*************************Step 1********************);");
function voewlsCount(str1){
  var vowel_list='aeiouAEIOU';
  var vcount=0;
  for (var index= 0; index< str1.length; index++) {
    if (vowel_list.indexOf(str1[index]) !==-1) {
      vcount++;
    }
  }
  return `given string is: ${str1}   vowel is:  ${vcount}`;

}
var result1=voewlsCount("JavaScript is the language Of Internet");
var result2=voewlsCount("I am Angular Developer");
var result3=voewlsCount("Hard work and commitment is the key of success");

console.log(result1);
console.log(result2); 
console.log(result3);


console.log("(*************************Step 2********************);");
var reverseStr = function (str) {
  var reverse = " ";
  
  for (let index = str.length - 1; index >= 0; index--) {

    var char = str.charAt(index);
    if (char == " ") {
      break;
  }
    reverse = reverse + char;
  }
  return reverse;
}
var result = reverseStr("Do it anyhow");
var res=reverseStr.length;
console.log(res);
console.log(`Reverse last word: ${result}`);
