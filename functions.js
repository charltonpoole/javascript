// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number. // TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
// TODO: Create a function that takes a string as a parameter and returns thereverseof the string. ***Do not use a console.log() inside of the function ***
// TODO: Create a function that takes in a string and returns the number of Vowelsinthe sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers
// TODO 1: Create a function called ‘multiply’ that will take in 3 parameters and multiply all 3 numbers together.
// Note: The argument passed must NOT be the same number.
function multiply(a, b, c) {
  if (a === b || b === c || a === c) {
    return "All numbers must be different.";
  }
  return a * b * c;
}
const convertToSeconds = function(minutes) {
  return minutes * 60;
};
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function reverseString(str) {
  return str.split('').reverse().join('');
}
function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("multiply:", multiply(2, 3, 4)); 
console.log("convertToSeconds:", convertToSeconds(5)); 
console.log("fahrenheitToCelsius:", fahrenheitToCelsius(68)); 
console.log("reverseString:", reverseString("hello")); 
console.log("countVowels:", countVowels("Javascript")); 
console.log("isPrime(2):", isPrime(11)); 
   