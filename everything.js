// TODO: Create a function called sum. The function will take in a parameter and calculate all the numbers from 0 -> the parameter. You must check if the parameterisan integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Makesureto test your code effectively.
function sum(limit) {
  if (typeof limit !== 'number' || limit < 0) {
    console.error("Input must be a non-negative number.");
    return undefined; 
  }
  let total = 0;
  for (let i = 0; i <= limit; i++) {
    total += i;
  }
  return total;
}
console.log(sum(5)); 
console.log(sum(10)); 
console.log(sum(0)); 

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
function factorial(number) {
    if (number < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    } else if (number === 0) {
        console.log("0 = 1");
        return;
    }

    let result = 1;
    let calculateString = "";

    for (let i = number; i >= 1; i--) {
        result *= i;
        calculateString += i;
        if (i > 1) {
            calculateString += " * ";
        }
    }

    console.log(`${calculateString} = ${result}`);
}

factorial(4);
factorial(5);
factorial(0);
factorial(-3);

// TODO: Create a function called funkyMath . If this function is calledwith2arguments the function will subtract the first from the second. If the functionis calledwith 3 arguments it will add all 3 numbers together. If the function is called with 4 arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
function funkyMath(...args) {
    const count = args.length;

    if (count === 2) {
        console.log(args[1] - args[0]);
    } 
    else if (count === 3) {
        console.log(args[0] + args[1] + args[2]);
    } 
    else if (count === 4) {
        const result = (args[0] + args[1]) / (args[2] + args[3]);
        console.log(result.toFixed(2));
    } 
    else {
        console.log("Please provide 2, 3, or 4 arguments only.");
    }
}

// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
    numbers.splice(i, 1);
    i--; 
  }
}

oddNumbers.sort((a, b) => a - b);

console.log("Even numbers:", numbers);
console.log("Odd numbers", oddNumbers);

// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
// TODO: Create and add a new property and value of ‘favourite food’ to the object.
// TODO: . Now delete the age property from the object.
let me = {
  firstName: "Charlton",
  lastName: "Poole",
  age: 21,
  favouriteColor: "Black",
  dreamCar: "Honda Integra dc2 Type R 1998 model"
};

me.favouriteFood = "Mac and Cheese";
delete me.age;
console.log(me);


