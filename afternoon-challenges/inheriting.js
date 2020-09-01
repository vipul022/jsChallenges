// Create three classes:

// Person

// Teacher

// Student

// Teacher & Student should inherit from Person.

// Person should have instance properties for:

// a string property named 'name' that gets set in the Person constructor

// a string property named 'city' that gets set in the Person constructor

// A Teacher should have instance properties for:

// an array of strings named "classesTeaching" that gets set in the Teacher constructor

// A Student should have instance properties for:

// an array of strings named "classesStudying" that gets set in the Student constructor

// All classes should have a static property named "count" that keeps track of how many instances have been made. Note that your solution should try to be as DRY as possible - keep an eye out for duplicated code (eg. the same functions in multiple classes) and find ways to reduce that duplication!

class Person {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    Person.count++;
  }
}
Person.count = 0;
class Teacher extends Person {
  constructor(name, city, classesTeaching) {
    super(name, city);
    this.classesTeaching = classesTeaching;
    Teacher.count++;
  }
}
class Student extends Person {
  constructor(name, city, classesStudying) {
    super(name, city);
    this.classesStudying = classesStudying;
    Student.count++;
  }
}
