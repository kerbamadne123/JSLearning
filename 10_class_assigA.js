console.log(
  "******************************Step 1************************************"
);

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

const vahicle1 = new Vahicle("i20", 123, 2000000, "red", 10021);
console.log(vahicle1);
const vahicle2 = new Vahicle("audi", 151, 500000, "blue", 10022);
console.log(vahicle2);
const vahicle3 = new Vahicle("i10", 120, 800000, "black", 10023);
console.log(vahicle3);
const vahicle4 = new Vahicle("Honda", 550, 500000, "yellow", 10024);
console.log(vahicle4);
const vahicle5 = new Vahicle("TOYOTA", 744, 900000, "white", 10025);
console.log(vahicle5);

const arrayOfVahicle = [vahicle1, vahicle2, vahicle3, vahicle4, vahicle5];

for (let index = 0; index < arrayOfVahicle.length; index++) {
  const element = arrayOfVahicle[index];
  console.log(
    `${element.carName},${element.modelNumber},${element.price},${element.color},${element.enginNumber}`
  );
}

console.log(
  "******************************Step 2************************************"
);

class Collage {
  collageName;
  location;
  university;
  establishment;

  constructor(collageName, location, university, establishment) {
    this.collageName = collageName;
    this.location = location;
    this.university = university;
    this.establishment = establishment;
  }
}





const collage1 = new Collage("COEP Pune", "Pune", "Pune University", "1854");
console.log(collage1);
const collage2 = new Collage("MGM", "Nanded", "SRTMUN", "2000");
console.log(collage2);
const collage3 = new Collage("DY PATIL", "Talegao", " Pune University", "1999");
console.log(collage3);
const collage4 = new Collage("Ram Mehge", "Amaravati", "SGM", "1990");
console.log(collage4);
let traverseObject = function () {
  console.log(`
collage Name:${collage1.collageName},
location    :${collage1.location},
University :${collage1.university},
estd.Year  :${collage1.establishment}                   
                                        `);

  console.log(`
collage Name:${collage2.collageName},
location    :${collage2.location},
University :${collage2.university},
estd.Year  :${collage2.establishment}                   
                                 `);
  console.log(`
collage Name:${collage3.collageName},
location    :${collage3.location},
University :${collage3.university},
estd.Year  :${collage3.establishment}                   
                              `);
  console.log(`
collage Name:${collage4.collageName},
location    :${collage4.location},
University :${collage4.university},
estd.Year  :${collage4.establishment}  `);
};
traverseObject();
