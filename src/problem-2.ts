// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// // Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// // Sample Output:
// [1, 2, 3, 4, 5]
function removeDuplicates(numbers: number[]): number[] {
    // Set automatically removes duplicates
    const seen = new Set<number>();
    const result: number[] = [];
    // for-of loop iterates through each element of the array.
    for (const num of numbers) {
        if (!seen.has(num)) {
            seen.add(num);
            result.push(num);
        }
    }   
    return result;
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

