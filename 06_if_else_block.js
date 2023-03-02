function maleMarriageEligibility(gender, age, boyName) {
  if (age < 0 || age == undefined) {
    // true && false == false
    return `Hey ${boyName} you are Not eligible for marriage ${age}`;
  }
  // if (age==undefined) {

  //   return `Hey ${boyName} you are Not eligible for marriage ${age}`;

  // }

  if (gender == "male" && age >= 21) {
    var str = `Hey ${boyName} you are eligible for marriage`;
    return str;
  } else {
    var str = `${boyName} you are Not eligible for marriage`;
    return str;
  }
}
var result = maleMarriageEligibility("male", 25, "Billgates");
console.log(result);

var result = maleMarriageEligibility("male", -30, "Nikhil");
console.log(result);
var result = maleMarriageEligibility("male", undefined, "Raju");
console.log(result);


