/*
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0
Please try to think of a fast solution: O(n2) or even O(n) if you can.
*/


function func(arr, start, end){
    if (start > end){
        return 0;
    }
    if (start == end){
        return arr[start];
    }

    let mid = Math.floor((start + end) / 2);

    let leftValue = -Infinity;
    let rightValue = -Infinity;

    let tempSum = 0;
    for (let i = mid; i >= 0; i--){
        tempSum += arr[i];
        leftValue = Math.max(leftValue, tempSum);
    }

    tempSum = 0
    for (let i=mid+1; i <= end; i++){
        tempSum += arr[i];
        rightValue = Math.max(rightValue, tempSum);
    }

    return Math.max(func(arr, start, mid), func(arr, mid+1, end), leftValue + rightValue);
}

function getMaxSubSum(arr){
    return func(arr, 0, arr.length-1);
}


// checking
console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);