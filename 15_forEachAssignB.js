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
console.log(`*************************************1.Details Of TCS Employees************************************************`);
arrayOfEmployees.forEach(employee=>{
  if (employee.empCompany=="TCS") {
      console.log(`employee name :${employee.empName}  Company name:${employee.empCompany}`);
  }
})
console.log(`**************************************2. Employees Whose Salary Is greater Than Or Equal to 50K *************************************************`);

arrayOfEmployees.forEach(employee=>{
  if (employee.empSalary>=50000) {
      console.log(employee);
  }
})
console.log(`**************************************3. Total Salary of All Employees  *************************************************`);
let sumSalary=0;
arrayOfEmployees.forEach(employee=>{
  sumSalary=sumSalary+employee.empSalary;
  return sumSalary;
})
console.log(`Sum of Salary:${sumSalary}`);
console.log(`**************************************4. Average salary of  Employees  *************************************************`);
let sum=0;
arrayOfEmployees.forEach(employee=>{
  sum=sum+employee.empSalary;
 average = sum / arrayOfEmployees.length;
})
console.log(`Average Salary Of Employees:${average}`);
console.log(`**************************************5. Employees From IT OR HR Department *************************************************`);

arrayOfEmployees.forEach(employee=>{
  if (employee.empDept=="IT","HR"&& employee.empSalary>=75000) {
      console.log(employee);
    }
})
