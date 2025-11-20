// TODO: Create a function that validates user input
function validateInput(name, email, password) {
  const errors = {}; 
  if (!name || name.trim() === "") {
    errors.name = "Name is required."; 

  } else if (!/^[A-Za-z\s]+$/.test(name)) {
    errors.name = "Name must contain only letters and spaces.";

  }if (Object.keys(errors).length === 0) {
    return { valid: true, message: "All inputs are valid!" }; 
  } else {
    return { valid: false, errors };
  }
}

// TODO: Create a function that demonstrates multiple error types
if (!age) {
    errors.age = "Age is required.";
  } else if (isNaN(age)) {
    errors.age = "Age must be a number."; 
  } else if (age < 18) {
    errors.age = "You must be at least 18 years old."; 
  }

  if (!password || password.trim() === "") {
    errors.password = "Password is required."; 
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters."; 
  } else if (!/\d/.test(password)) {
    errors.password = "Password must contain at least one number."; 
  }


// TODO: Create a collection of helper functions for string manipulation
const StringHelpers = {
    capitalize: function(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
    wordCount: function(str) {
    if (!str.trim()) return 0;
    return str.trim().split(/\s+/).length;
  },
    repeat: function(str, times) {
    return str.repeat(times);
  }
}
// TODO: Create helper functions for array operations
const arrayHelpers = {
    sum: function(arr) {
    return arr.reduce((total, num) => total + num, 0);
  },

    sortNumbers: function(arr, order = "asc") {
    return arr.slice().sort((a, b) => order === "asc" ? a - b : b - a);
  },  

  first: function(arr) {
    return arr.length ? arr[0] : undefined;
  },

  last: function(arr) {
    return arr.length ? arr[arr.length - 1] : undefined;
  },

}