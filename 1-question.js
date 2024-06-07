// Task 1:
// Given an array of numbers, use the map method to create a new array
// where each number is multiplied by 2.
// Example Input: [1, 2, 3]
// Expected Output: [2, 4, 6]

const number = [1, 2, 3];

const multipli = number.map(num => num * 2)

console.log(multipli);


// Task 2:
// Use the sort method to arrange the following array of strings in alphabetical order.
// Example Input: ['banana', 'apple', 'cherry']
// Expected Output: ['apple', 'banana', 'cherry']

const fruit = ['banana', 'apple', 'cherry'];
console.log(fruit.sort());



// Task 3:
// How would you use the splice method to insert 'yellow' and 'purple' between 'red' and 'green' in the following array?
// Example Input: ['red', 'green', 'blue']
// What will the array look like after the operation?

const colors = ['red','green', 'blue'];
colors.splice(1,0,'yellow','purple');
console.log(colors);


// Task 4:
// Use the filter method to create a new array that contain all odd numbers from the original array.
// Example Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected Output: [1, 3, 5, 7, 9]


const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const method = array1.filter((num) => num % 2 !== 0 );
console.log(method);