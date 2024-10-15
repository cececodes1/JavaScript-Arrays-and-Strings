// Task 1 Adding and Removing Elements
// Create an array with some initial elements.
let fruits = [peach, mango, strawberry]; 

// Use the push method to add a new element to the end of the array.
fruits.push(pineapple);
console.log(fruits); // [peach, mango, strawberry, pineapple]

// Use the pop method to remove the last element from the array.
fruits.pop();
console.log(fruits); // [peach mango, strawberry]

// Task 2: Sorting Arrays

// Create an array of numbers in random order.
let numbers = [5, 7, 4, 3, 2, 8]; 

// Use the sort method to sort the array in ascending order. 
numbers.sort((a, b) => a - b);
console.log(numbers); // [2, 3, 4, 5, 7, 8]

// Task 3: Applying Array Methods

// Create an array of numbers.
let number = [ 3, 1, 5, 2, 4];

// Use the map method to double each number in the array.
let doubledNumber = numbers.map(num => num * 2);
console.log(doubledNumber); // [6, 2, 10, 4, 8 ]

// Use the filter method to filter out even numbers from the array.
let oddNumber = number.filter(num => num % 2 !== 0); 
console.log(oddNumber); // [3, 5]

// Use the reduce method to calculate the sum of all numbers in the array.
let sumOfNumber = number.reduce((total, num) => total + num, 0);
console.log(sumOfNumber); // 15