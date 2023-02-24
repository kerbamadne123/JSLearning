var word1="javaScript";
var word2="Google Chrome";
var word3="Developer Smart";
console.log("*******************o/p Step1********************");



function seqareOfWordLength(word){
  var num= word;
  var counthLength=num.length**2;
console.log(`Given Word is:${word}`);
console.log(`Length of Given Word: ${word.length}`);
console.log(`Square of ${word} length:${counthLength}`);
return word;
}
seqareOfWordLength(word1);
seqareOfWordLength(word2);
seqareOfWordLength(word3);

console.log("*******************Step2********************");

function string(){
    var developer="I am Angular Developer";
  var stringLength=  developer.length;
  var wordSplit=developer.split("");
 var wordCount= wordSplit.length;
 console.log(`Given String length Is:${stringLength}`);
 console.log(`No of Word Available In This String:${wordCount}`);
 console.log(`String After Divided By Total Words:${stringLength/wordCount}`);
 console.log(`String After Multiplying By Total Words:${stringLength*wordCount}`);




}
string();





