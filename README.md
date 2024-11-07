
# Batch 4 - TypeScript Assignment-1

## Overview
This repository contains solutions to a series of TypeScript problems demonstrating key concepts like data typing, interfaces, classes, type guards, and generic programming. It also includes a blog post on Guide to Handling Asynchronous Operations with Async/Await in TypeScript, offering beginner-friendly explanations and code examples.

## Assignment Problems

Each solution is organized into separate files, each addressing a unique problem statement. The solutions follow TypeScript best practices and aim for clarity and efficiency.

### Problem Descriptions

1. **Problem 1: Sum Array**
   - **Function**: `sumArray`
   - **Description**: Takes an array of numbers and returns the sum of all elements.

2. **Problem 2: Remove Duplicates**
   - **Function**: `removeDuplicates`
   - **Description**: Accepts an array of numbers and returns a new array with duplicates removed, preserving the original order.
  
3. **Problem 3: Count Word Occurrences**
   - **Function**: `countWordOccurrences`
   - **Description**: Counts the number of times a word appears in a sentence, ignoring case.

4. **Problem 4: Calculate Shape Area**
   - **Function**: `calculateShapeArea`
   - **Description**: Defines a union type for Circle and Rectangle, with a type guard to calculate area based on shape type.

5. **Problem 5: Get Property**
   - **Function**: `getProperty`
   - **Description**: Generic function that takes an object and property name, returning the property value if it exists.
  
6. **Problem 6: Update Profile**
   - **Function**: `updateProfile`
   - **Description**: Uses the `Partial` utility type to accept profile updates and return an updated profile.
  
7. **Problem 7: Car Class**
   - **Class**: `Car`
   - **Description**: Includes properties `make`, `model`, `year`, and a method `getCarAge` to calculate the car’s age based on the current year.
  
8. **Problem 8: Validate Keys**
   - **Function**: `validateKeys`
   - **Description**: Takes an object and array of keys, returning `true` if all specified keys exist on the object, otherwise `false`.

## Blog
In addition to the coding exercises, this assignment includes a blog post on a TypeScript topic:
- **Title**: _How to handle asynchronous operations using async/await in TypeScript._ 
- **Description**: This blog introduces beginners to asynchronous programming in TypeScript using `async/await`, explaining how it simplifies code compared to callbacks and promises, with practical examples.

## Getting Started
### Prerequisites
- Ensure you have Node.js and TypeScript installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd batch4-assignment-1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Solutions
In the package.json file, the dev script is defined as:

```typescript
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/problem-number.ts"
}
```
Running the Script
To use the command, run:

```bash
npm run dev
```

## Contributing
If you have suggestions or improvements, feel free to fork the repo and open a pull request.

## License
This project is licensed under the MIT License.
