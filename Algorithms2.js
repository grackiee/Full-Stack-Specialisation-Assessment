function findMissingNumber(arr) {
    if (!Array.isArray(arr)) {
        return "Error: not array.";
    }

    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    let containsNonNumeric = false;

    for (const num of arr) {
        if (typeof num !== 'number' || num < 0) {
            return "Error: Input contains a negative number or non-numeric value.";
        }
        actualSum += num;
    }

    if (isNaN(actualSum)) {
        return "Error: contains a non-numeric value.";
    }

    return expectedSum - actualSum;
}

const inputArray = [3, 7, 1, 2, 4, 6];
console.log(findMissingNumber(inputArray)); // Output: 5

// The given problem involves finding the missing number in an array of integers ranging from 1 to n. We can calculate the expected sum of the sequence of numbers from 1 to n and compare it to the actual sum of the numbers in the array. The difference between the expected and actual sums will be the missing number.
// The time complexity is O(n) - calculating the expected and actual sums take n as the length of the array. 
// This approach is a straightforward and efficient approach. There are probably more efficient and reliable ways to approach the problem but I cannot think of any.
