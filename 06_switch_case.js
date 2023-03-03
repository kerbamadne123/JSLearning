// function dayCheck() {
//   var dayNumber = 1;
//   //1 monday
//   //2 Tuesday
//   //7 Sunday
//   //0||>7 ||null|| undefined||NaN

//   if (
//     dayNumber <= 0 ||
//     dayNumber > 7 ||
//     dayNumber == null ||
//     isNaN(dayNumber)
//   ) {
//     console.log("Invalied day number");
//   }
//   if (dayNumber == 1) {
//     console.log("Monday");
//   }
//   if (dayNumber == 2) {
//     console.log("Tuesday");
//   }
//   if (dayNumber == 3) {
//     console.log("Sunday");
//   }
//   if (dayNumber == 4) {
//     console.log("Sunday");
//   }
//   if (dayNumber == 5) {
//     console.log("Sunday");
//   }
//   if (dayNumber == 6) {
//     console.log("Sunday");
//   }
//   if (dayNumber == 7) {
//     console.log("Sunday");
//   }
// }
// dayCheck(1);



function weekDay(day) {
  switch (day) {
    case 1:
      console.log(`day of the week is ${day}: Mon`);
      break;
    case 2:
      console.log(`day of the week is ${day}: Tue`);
      break;
    case 3:
      console.log(`day of the week is ${day}: Wed`);
      break;
    case 4:
      console.log(`day of the week is ${day}: Tru`);
      break;
    case 5:
      console.log(`day of the week is ${day}: Fri`);
      break;
    case 6:
      console.log(`day of the week is ${day}: Sat`);
      break;
    case 7:
      console.log(`day of the week is ${day}: Sun`);
      break;
      default: 
console.log(`Invalid Date : ${day}`);
      break;
  }
}
weekDay(1);
 weekDay(5);
 weekDay(7);