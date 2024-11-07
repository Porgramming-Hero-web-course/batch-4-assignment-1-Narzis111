// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1
// // Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// // Sample Output:
// 1;
function countWordOccurrences(sentence: string, word: string): number {
    // .tolowercase() => to ignore case
    // .split() => splitting sentence into an array of words
    // .filter() => to count occurrences of the word
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    const words = lowerSentence.split(' ');
    const count = words.filter(w => w === lowerWord).length;
    return count;
}

console.log(countWordOccurrences("I love typescript", "typescript")); // Output: 1
console.log(countWordOccurrences("I love TypeScript", "typescript")); // Output: 1
console.log(countWordOccurrences("I love typescript and type of Typescript is great coz typescripty is nice", "typescript")); // Output: 2
