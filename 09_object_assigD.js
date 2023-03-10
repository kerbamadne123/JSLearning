console.log("Step 1- Add Minimum 5 properties: ");
let professor={
    firstName:"Gajanan",
    lastName:"Kharat",
    age:"32",
    class:"CodeMind",
    id:"112233",
     degrees:{
    engineering:"CSC",
    PHD:"Adv Computing",
    language1:"Angular",
    language2:"Java",
    language3:"Html",
    },
    Certificate:["Hacker Rank Participation","Certificate in IFE Course","Certificate in Adv Programming"],
    totalExperience:"14 Years"
}
console.log(professor);
console.log("Step 2- Include Nasted Objeccts for Degress: ");
console.log(professor.degrees);

console.log("Step 3- Add array for Certificate: ");

console.log(professor.Certificate);
console.log("Step 4- Function For Concat All Degrees: ");
console.log("Techers Degrees Are:",professor.degrees);

console.log("Step 5- New Property Total Experience:");

console.log("Total Experience:",professor.totalExperience);

console.log("Step 6- Modify Exiting:");


professor.degrees.language3 = "SQL";
console.log(professor.degrees.language3);
console.log(professor.degrees);

console.log("Step 7- Adding One  Certificates:");
professor.Certificate[""]="Oracle Certified";
console.log(professor.Certificate);
console.log("Step 8- Log Last Element  of Array:");
console.log(" Log Last Element  of Array:",professor.Certificate[professor.Certificate.length-1]);