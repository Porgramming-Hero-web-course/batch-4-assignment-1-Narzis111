// Write a TypeScript function sumArray that takes an array of numbers 
// and returns the sum of all elements in the array.
{

function sumArray (nums: number[]): number{
     return nums.reduce((acc, curr)=> acc + curr, 0);

}

const array = [1, 2, 3, 4, 5];

console.log(sumArray(array));
}
