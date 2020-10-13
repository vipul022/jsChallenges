// Check presence of the function parameters. Throw an Error when function square() is called without arguments.
// To do this, create a new function, and use it as default parameter.

"use strict";

function square(a = noParams()) {
  if (isANumber(a)) {
    console.log(a * a);
  } else {
    throw "Not a number";
  }
}

const isANumber = (x) => {
  return !isNaN(x);
};

const noParams = () => {};
square(10);
// 100
try {
  square("hello");
} catch (err) {
  console.log(err);
}
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires an argument!
