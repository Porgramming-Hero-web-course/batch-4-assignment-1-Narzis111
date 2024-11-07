{
// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// Hints: Use keyof

// // Sample Input:
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));

// // Sample Output:
// Alice;
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Sample Usage:

// Define an object
const person = { name: "Alice", age: 30 };

// Get the property "name" from the person object
console.log(getProperty(person, "name")); // Output: Alice

// Get the property "age" from the person object
console.log(getProperty(person, "age"));  // Output: 30

}