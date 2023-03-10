let Student = {
  firstName: "kerba",
  lastName: "madne",
  isWorking: "true",
  age: 22,
  collegeName: "abc",
  id: 1235,
   address:{
street:"wakad",
  city:"pune",
  PIN:"131204."
},
school:"ABC",
friends:["Dilkush","Yogesh","Nikhil","Amol"],
show: function () {
  console.log("I am show() function");
},
addressDetails: function(){
  return`Address is:street ${this.address.street},city ${this.address.city},PIN ${this.address.PIN}`
}
};

let resulAddress=Student.addressDetails();
console.log(resulAddress);
Student.show();

console.log(Student.friends);

console.log(Student.friends[3]);
console.log(Student.friends[Student.friends.length-1]);

//typeof city
console.log(typeof Student.address.city);
//access the city
console.log(Student.address.city);

//uodate 131204
Student.address.PIN = "431204";
//console.log(Student);
console.log(typeof Student);
// . notation
console.log(Student.firstName);
// [] notatation
console.log(Student["lastName"]);
// update property
Student.collegeName = "COEP PUNE";
console.log(Student);
console.log(Student.age);
//Add property
Student.city = "Mumbai";
//Add property
Student.country = "india";
//delete property
delete Student.isWorking;
console.table(Student);
//Empty Object
let teacher={};


