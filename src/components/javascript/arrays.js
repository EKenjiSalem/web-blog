// Creating an array with some elements
let fruits = ["apple", "banana", "cherry"];

// Accessing elements by index
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"

// Modifying elements
fruits[2] = "strawberry";

// Adding elements to the end of the array
fruits.push("orange");

// Removing elements from the end of the array
fruits.pop();

// Finding the length of an array
console.log(fruits.length); // 3

// Iterating through an array using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using array methods
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Other array methods: push, pop, shift, unshift, splice, concat, slice, sort, etc.
