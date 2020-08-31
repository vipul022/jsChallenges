// let user = "Tommy";
// if (user === "Tom") {
//   console.log(`Hello ${user}`);
// }
// console.log("Hello someone other than Tom");

// Run the code by putting it in a file called scope.js and running it with node. Currently the last thing it prints is “num is now 5”.

// Why does it show that num is 5?

// We want it to say “num is now 10”. What do you have to change? Do not change the initial variable declaration.

// Make sure you can explain what is happening here.

// Note that the scope.js file is in a folder JS_Scope so you will have to cd into it
let num = 10;
for (num = 0; num < 5; num++) {
  console.log(num);
}

console.log("num is now", num);
