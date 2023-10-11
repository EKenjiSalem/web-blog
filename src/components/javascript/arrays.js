const originalArray = [1, 2, 3];

// Creates a copy of the array
const copiedArray = [...originalArray]; 

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combines the arrays
const mergedArray = [...array1, ...array2];



const originalArray = [1, 2, 3];

// Adds elements to the array
const newArray = [...originalArray, 4, 5]; 


function sum(a, b, c) {
    return a + b + c;
  }
  
  const values = [1, 2, 3];
  // Adds the variables, result is 6
  const result = sum(...values); 
  

const text = "Hello";
// Converts the string Hello into an array of characters
const charArray = [...text]; 


const originalObject = { a: 1, b: 2 };
// Creates a copy of the object
const copiedObject = { ...originalObject }; 




function fetchData(callback) {
  setTimeout(function () {
    callback('Data fetched!');
  }, 1000);
}

fetchData(function (result) {
  console.log(result);
});




function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Data fetched!');
    }, 1000);
  });
}

fetchData()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });



  async function fetchData() {
    try {
      const result = await new Promise(function (resolve) {
        setTimeout(function () {
          resolve('Data fetched!');
        }, 1000);
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
   


// counter.js

// Private variable (encapsulated)
let count = 0;

// Private function (encapsulated)
function increment() {
  count++;
}

// Public function (exposed as part of the module's interface)
function getCount() {
  return count;
}

function reset() {
  count = 0;
}

// Export only the public functions
export { getCount, reset };



// main.js

import { getCount, reset } from './counter.js';

console.log(`Initial count: ${getCount()}`); // Initial count: 0
increment(); // This would result in an error because increment is not accessible.
reset(); // This resets the count to 0.
console.log(`Updated count: ${getCount()}`); // Updated count: 0
