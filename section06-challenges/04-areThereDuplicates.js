// Implement a function that accepts a variable number of arguments and checks
// wheter there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the
// multiple pointers pattern
// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Retrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O (n log n)
// Space - O(1)

// My solution with frequency pattern

function areThereDuplicates(...args) {
  let frequencyCounter = {};

  for (let item of args) {
    frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
}
// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// Solution with Multiple Pointers pattern

function areThereDuplicates2(...args) {
  console.log(args);
  let array = Number.isInteger(args[0]) ? args.sort((a, b) => a - b) : args.sort();
  console.log(args);

  let start = 0;
  let next = 1;

  while (next < array.length) {
    console.log(array[start], array[next]);
    if (array[start] === array[next]) {
      return true;
    } else {
      start++;
      next++;
    }
  }
  return false;
}
// console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // 
// console.log(areThereDuplicates2(1, 2, 3, 1)); // 

// One Liner Solution
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates3(1, 2, 3)); // false
console.log(areThereDuplicates3(1, 2, 2)); // true
console.log(areThereDuplicates3('a', 'b', 'c', 'a')); // true
