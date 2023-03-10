const employee={

    empId:12345,
    empName:"Elon Musk",
    country:"US",
    city:"Silicon velley"

}
console.log("=======================Object Traversing======================");
for (const key in employee) {
    //console.log(key);

    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);

    }
}
const keysOfEmployee=Object.keys(employee);
console.log(keysOfEmployee);
const valuessOfEmployee =Object.values(employee);
console.log(valuessOfEmployee);
const entriesOfEmployee=Object.entries(employee);
console.log(entriesOfEmployee);
console.log(entriesOfEmployee[0]);




