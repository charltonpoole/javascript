// TODO: Create a global variable called globalCount
var globalCount = 0;
// TODO: Create a function that demonstrates local scope
function showLocalScope() {
  let localCount = 5; 
  console.log("Inside the function:", localCount);
}
showLocalScope();
console.log("Outside the function: localCount cannot be accessed from here");
 

// TODO: Create a function that tries to modify both variables
var globalCount = 10;

function modifyVariables() {
  let localCount = 5;

  globalCount += 5; 
  localCount += 5;  

  console.log("Inside the function:");
  console.log("globalCount =", globalCount);
  console.log("localCount =", localCount);
}
modifyVariables();

console.log("Outside the function:");
console.log("globalCount =", globalCount);
console.log("localCount =", typeof localCount);
// TODO: Create a Student constructor function
function Student(firstName, lastName, age, grade) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.grade = grade;
}
// TODO: Create several student instances
function Student(firstName, lastName, age, grade) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.grade = grade;
}
let student1 = new Student("Charlton", "Poole", 21, "13th Grade");
let student2 = new Student("Imaan", "Cummings", 19, "13th Grade");
let student3 = new Student("Miche", "Fernandez", 26, "13th Grade");
let student4 = new Student("Shaheed", "Karlie", 19, "13th Grade");

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

// TODO: Create an object literal with nested 
let student = {
  firstName: "Charlton",
  lastName: "Poole",
  age: 21,
  contactInfo: {
    email: "charlton.poole@gmail.com",
    phone: "079 998 9313",
    address: {
      street: "3 takkies links",
      city: "Meowntin Cape",
      zipCode: "007"
    }
  },
  subjects: ["Coding, struggling , tired, hungry"]
};

console.log(student);
