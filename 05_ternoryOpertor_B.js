function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : `${boyName} sorry Try next time`;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);
  var result=maleMarriageEligibility("male",17,"stew jobs");
  console.log(result);
  function femaleMarriageEligibility(gender,age,girlName){
    var result=(gender=="female" && age>=18)? `hey ${girlName} you are eligible for marriage`:`${girlName} sorry try next time`;
    return result;
  }
  var result=femaleMarriageEligibility("female",16,"jenifer");
  console.log(result);
  var result=femaleMarriageEligibility("female",27,"Billgates");
  console.log(result);