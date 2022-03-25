// Write a function which accepts an array of integers and a number called n.
// The function should calculate the maximun sum of n consecutive elements in the array

// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
// maxSubArraySum([4, 2, 1, 6], 1); // 6
// maxSubArraySum([4, 2, 1, 6, 2], 4); // 13
// maxSubArraySum([], 4); // null

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let temporarySum = 0;
  if(arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  temporarySum = maxSum;
  for(let i = num; i < arr.length; i++) {
    temporarySum = temporarySum - arr[i - num] + arr[i];
    maxSum = Math.max(temporarySum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))