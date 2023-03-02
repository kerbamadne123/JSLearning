function fun(gradScore,hscScore,sscScore,candidateName){
    var eligible=(gradScore>=70 || hscScore>=80 || sscScore>=90)?`congrates ${candidateName} you are elligible for tcs interview`:`${candidateName} Unfortunatly you are not elligible for tcs interview`
return eligible;
}
var result=fun(80,86,90,"Dilkhush");
console.log(result);
var result=fun(70,65,55,"kerba");
console.log(result);
var result=fun(60,79,88,"abhishek");
console.log(result);