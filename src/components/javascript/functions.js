var globalVar = 10; // Declared in global scope

function exampleFunction() {
  console.log(globalVar); // Accessible within functions
}

exampleFunction(); // Result: 10
console.log(globalVar); // Also accessible outside functions



function exampleFunction() {
  var localVar = 37; // Declared in local scope
  console.log(localVar); // Accessible within the function
}
  
exampleFunction(); // Outputs: 37
console.log(localVar); // Error: localVar is not defined outside the function
  


function apply(func, x) {
  return func(x);
}


function multiplyBy(factor) {
  return function (x) {
    return x * factor;
  };
}


// Map
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (x) {
  return x * x;
});


// Filter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (x) {
  return x % 2 === 0;
});


// Reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);



if (condition) {
  // Code to execute if the condition is true
}


let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's not too hot.");
}



let grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}
