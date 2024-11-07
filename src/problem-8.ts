// Define the generic function validateKeys with T constrained to object
function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    // Use the every method to check if all keys exist in the object
    return keys.every(key => key in obj);
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"])); 
// console.log(validateKeys(person, ["name", "address"])); 
