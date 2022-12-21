/*
Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
*/

function sum(arr, n) {
    // Only change code below this line
    if(n == 0){
        return 0;
    }
    return sum(arr, n-1) + arr[n-1];
    // Only change code above this line
  }

  console.log(sum([2, 3, 4], 1)); // = 2
  