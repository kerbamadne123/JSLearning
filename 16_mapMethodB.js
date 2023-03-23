class employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
      this.empId = empId;
      this.empName = empName;
      this.empDept = empDept;
      this.empSalary = empSalary;
      this.empCompany = empCompany;
    }
  }
  
  const Anil = new employee(22, "Anil", "IT", 50000, "TCS");
  const Radha = new employee(33, "Radha", "HR", 74000, "Wipro");
  const Rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
  const Sonali = new employee(66, "Sonali", "Finance", 45000, "Infy");
  const Monika = new employee(77, "Monika", "IT", 40000, "Wipro");
  const Vinayak = new employee(88, "Vinayak", "IT", 75000, "TCS");
  const Mahesh = new employee(99, "Mahesh", "HR", 85000, "Infy");
  const arrayOfEmployees =[Anil,Radha,Rishi,Sonali,Monika,Vinayak,Mahesh];;
const newArray =[];
arrayOfEmployees.forEach(employee=>newArray.push(employee.empName));
console.log(`**********************************************Adding Employee Names In New Array**************************************************************`);
console.log(newArray);

console.log(`**********************************************List Of Employee Department**************************************************************`);
const deptArray =[];
arrayOfEmployees.forEach(employee=>deptArray.push(employee.empDept));
console.log(deptArray);
console.log(`**********************************************List Of Employee ID's**************************************************************`);
const idArray =[];
arrayOfEmployees.forEach(employee=>idArray.push(employee.empId));
console.log(idArray);
console.log(`**********************************************List Of Employee Working In TCS**************************************************************`);

arrayOfEmployees.forEach(employee=>{
if (employee.empCompany=="TCS") {
    console.log(`Employee Name:${employee.empName} // Employee Company:${employee.empCompany}`);
}})
