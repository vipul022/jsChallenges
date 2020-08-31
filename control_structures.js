students = [
  { name: "Arry Potta", wam: 70, desc: "yer a lizard harry" },
  { name: "Bobby Brown", wam: 95, desc: "hey there folks, im bobby brown" },
  { name: "Cam Awesome", wam: 100, desc: "The taylor swift of boxing" },
  { name: "Hodor", wam: 49, desc: "hodor hodor hodor, god season 8 was trash" },
  {
    name: "Bran Stark",
    wam: 1,
    desc: "Kid looks like caligula, I do not trust him",
  },
];
// sum all the WAMs using reduce

// 0 is the initial value which will be used in first iteraton
console.log(students.reduce((acc, student) => acc + student.wam, 0));

// Find me the first student with grades under 50

console.log(students.find((student) => student.wam < 50));

// All students with marks > 50
console.log(students.filter((student) => student.wam > 50));

//  all students name
console.log(students.map((student) => student.name));

// array of the wams for students, using the map higher order function

console.log(students.map((student) => student.wam));

// Tell me the desc of each student using a for of loop

for (let student of students) {
  console.log(student.name + ": " + student.desc);
}

// tell me the keys and their corresponding values for Bran (using for in)
// solution using (for of) loop
for (let student of students) {
  if (student.name === "Bran Stark") {
    console.log(`name: ${student.name}
        wam: ${student.wam}
        desc: ${student.desc}`);
  }
}
// solution using (for in) loop
let bran = students[4];
for (let key in bran) {
  console.log(`the key is ${key} and the value is ${bran[key]}`);
}

// Tell me the name and index of each student pls

for (let i in students) {
  console.log(i);
  console.log(students[i]);
}

// harry potter prints "a wizard", bobby brown prints "a song"
// and the rest print "who?""
switch (students[0].name) {
  case "Arry Potta":
    console.log("a wizard");
    break;
  case "Bobby Brown":
    console.log("a song");
    break;
  default:
    console.log("who?");
    break;
}
