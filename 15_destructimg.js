let student={

    firstName:"kerba",
    lastName:"Madne",
    isWorking:true,
    age:23,
    collegeName:"ABC",
    id:123456,
   // city

}
// let isworking=student.isWorking;
// let age=student.age;
// let firstname=student.firstName;
// let lastname=student.lastName;
// let collegename=student.collegeName;
let{firstName,lastName,isWorking,age,collegeName,id,city="pune"}=student   // Object Destructuring
console.log(`Extracted values from is: isWorking ${isWorking} ${age} ${firstName} ${lastName} ${collegeName} ${city}`);

//Array Destructuring

const array=[5,6,7,8,9];
let[num1,num2,num3,num4,num5,num6=0]=array;
console.log(num1,num2,num3,num4,num5,num6);
