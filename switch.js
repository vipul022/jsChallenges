// Update the challenges statement to a Switch statement.

// This challenge may require you to refer to these Docs & Always work on keeping your code dry where possible.

// The shown if else loop takes up a lot of space and is a wall of text.

// imagine if this loop allowed 100 different response options.

// If you would like to experiment with prompt() or alert(), extract these challenges and work with them in your IDE of choice (Vs Code, Atom, Eclipse etc.)

// Extra Challenge

// Add a Date method into the completed Switch statement and dynamically have the day updated with the returned value.

// Information on the Day / Date methods can be found yet again... in the docs
let day = "Sunday";
// day should be the present day to dynamically print with the return value
let d = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[d.getDay()];
switch (day) {
  case "Monday":
    console.log(`${today}: Learning at Coder Academy`);
    break;
  case "Tuesday":
    console.log(`${today}: Learning at Coder Academy`);
    break;
  case "Wednesday":
    console.log(`${today}: Learning at Coder Academy`);
    break;
  case "Thursday":
    console.log(`${today}: Reviewing lessons from the week`);
    break;
  case "Friday":
    console.log(`${today}: Reviewing lessons from the week`);
    break;
  case "Saturday":
    console.log(`${today}: It is the weekend!`);
    break;
  case "Sunday":
    console.log(`${today}: It is the weekend!`);
    break;
  default:
    console.log("That is not a valid day");
}

console.log("What is your name.");
// let name;
let name = process.stdin.read();
console.log("Hi " + name);
