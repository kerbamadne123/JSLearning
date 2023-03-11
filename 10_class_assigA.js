
console.log("******************************Step 1************************************");

class Vahicle {
  carName;
  modelNumber;
  price;
  color;
  enginNumber;
  constructor(carName, modelNumber, price, color, enginNumber) {
    this.carName = carName;
    this.price = price;
    this.modelNumber = modelNumber;
    this.color = color;
    this.enginNumber = enginNumber;

  }
}

const vahicle1 = new Vahicle("i20", 123, 2000000, "red",10021);
//console.log(vahicle1);
const vahicle2 = new Vahicle("audi", 151, 500000, "blue",10022);
//console.log(vahicle2);
const vahicle3 = new Vahicle("i10", 120, 800000, "black",10023);
//console.log(vahicle3);
const vahicle4 = new Vahicle("Honda", 550, 500000, "yellow",10024);
//console.log(vahicle4);
const vahicle5= new Vahicle("TOYOTA", 744, 900000, "white",10025);
//console.log(vahicle5);

const arrayOfVahicle=[vahicle1,vahicle2,vahicle3,vahicle4,vahicle5];

for (let index = 0; index < arrayOfVahicle.length; index++) {
    const element = arrayOfVahicle[index];
    console.log(`${element.carName},${element.modelNumber},${element.price},${element.color},${element.enginNumber}`);
    
}

console.log("******************************Step 2************************************");

class College{
collegeName;
location;
division;
rating;

constructor(collegeName,location,division,rating){
this.collegeName=collegeName;
this.location=location;

this.division=division;
this.rating=rating;

}

}

const college1=new College("Coep","Pune",80,"A+");
console.log(college1);
const college2=new College("DY","mumbai",45,"B");
console.log(college2);
const college3=new College("MGM","Nanded",120,"A");
console.log(college3);
const college4=new College("Kdk","Nagpur",60,"A");
console.log(college4);


console.log("******************************Step 3************************************");

