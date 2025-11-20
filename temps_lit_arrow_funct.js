// Create a multiline string using template literals
const name = "Charlton";
const greeting = `
Hello, ${name}!
Java is hard:'(
`;

console.log(greeting);

// Create a function that uses template literals for HTML generation
function createUserCard(name, age, city) {
  return `
    <div class="user-card">
      <h2>${name}</h2>
      <p>Age: ${age}</p>
      <p>City: ${city}</p>
    </div>
  `;
}

// Add the generated HTML to the webpage
document.body.innerHTML += createUserCard("Charlton", 28, "Cape Town");

// Convert regular functions to arrow functions
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("Charlton"));

// Use arrow functions with array methods
const fruits = ["apple", "banana", "cherry"];

console.log("List of fruits:", fruits);

fruits.forEach(fruit => console.log(`I like ${fruit}`));
