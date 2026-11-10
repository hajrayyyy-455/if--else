let units = 80;
let bill;
if (units <= 100) {
  bill = units * 10;
} else if (units <= 300) {
  bill = 100 * 10 + (units - 100) * 15;
} else {
  bill = 100 * 10 + 200 * 15 + (units - 300) * 20;
}
console.log(bill);