// Template Literals. Create carInfo() function that will return info about each car
// A car is considered cheap if it's price is <= 20,000
// A car is considered expensive if it's price is > 20,000

Core: "use strict";

var cars = [
  { brand: "Honda", price: 13000 },
  { brand: "Rolls-Royce", price: 120000 },
  { brand: "Holden", price: 20000 },
];

let carInfo = (car) => {
  let category = "";
  if (car.price <= 20000) {
    category = "a cheap";
  } else {
    category = "an expensive";
  }
  return `Price of my new ${car.brand} is ${car.price}, and it is ${category} car.`;
};
cars.forEach((car) => console.log(carInfo(car)));
