// Write a function called sameFrequency. Given two  positive integers, 
// find out if the two numbers have the same frequency of digits.
// Your solution must have the following complexities
// Time: O(N)
//Sample Input:
// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false

function sameFrequency(num1, num2) {
  const valuesNum1 = num1.toString();
  const valuesNum2 = num2.toString();
  if (valuesNum1.length !== valuesNum2.length) {
		return false;
	}
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let digit of valuesNum1) {
    frequencyCounter1[digit] ? frequencyCounter1[digit]++ : frequencyCounter1[digit] = 1;
  }

  for (let digit of valuesNum2) {
    frequencyCounter2[digit] ? frequencyCounter2[digit]++ : frequencyCounter2[digit] = 1;
  }

  for(let key in valuesNum1) {
    if (valuesNum1[key] !== valuesNum2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false