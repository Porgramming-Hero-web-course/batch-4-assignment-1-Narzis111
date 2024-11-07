# Guide to Handling Asynchronous Operations with Async/Await in TypeScript
### Author: Narzis Nahar
## Date: 07/11/2024

Asynchronous operations are an important part of modern programming, especially when working with tasks like making API requests, reading files, or even just waiting for timers to finish. As a beginner in TypeScript or JavaScript, understanding how to handle these operations efficiently is crucial.

In this post, I am going to explain how to handle asynchronous operations using **async/await**, and why it is often a better option compared to the older methods of **callbacks** and **promises**. 

## What is Asynchronous Programming?

When we perform an **asynchronous operation**, it means that a task will take some time to complete (like waiting for data to load from a server), but our program can continue running other tasks in the meantime. For example:
- Fetching data from an external API
- Waiting for a user to interact with the website
- Reading or writing files from the file system

Asynchronous operations help make sure our app stays responsive and doesn’t freeze while waiting for something to finish.

## Callback Functions: The Old Way

Before modern features like promises and async/await, **callbacks** were the go-to method for handling asynchronous operations. A callback is simply a function that is passed into another function and gets called when the operation finishes.

### Example Using Callbacks:

```typescript
function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("Data has been fetched!");
  }, 2000); // Simulating an asynchronous task with a delay
}

fetchData((data) => {
  console.log(data); // After 2 seconds, "Data has been fetched!" will be logged
});
```

While callbacks work, they have a drawback: they can quickly become difficult to manage when there are many asynchronous tasks happening one after another. This is often referred to as **callback hell**.

## Promises: A Step Up

To make things cleaner, **promises** were introduced. A promise represents a task that will eventually be completed in the future, either successfully or with an error. Promises allow us to chain multiple tasks together in a cleaner way than callbacks.

### Example Using Promises:

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data has been fetched!");
    }, 2000);
  });
}

fetchData().then((data) => {
  console.log(data); // After 2 seconds, "Data has been fetched!" will be logged
});
```

Promises are definitely better than callbacks, but when we already have a lot of promises, chaining them with `.then()` can still result in messy code.

## Async/Await: The Modern Solution

The introduction of **async/await** makes handling asynchronous code even easier and cleaner. With async/await, we can write asynchronous code in a way that looks and behaves like normal, synchronous code. It’s simple and helps us avoid the complexity of multiple `.then()` calls.

### What is Async/Await?

- **async**: This keyword is added before a function to mark it as asynchronous. An async function always returns a promise.
- **await**: This keyword is used to pause the execution of an async function until a promise is resolved. We can think of it as waiting for something to finish before continuing with the next task.

Async/await allows us to write asynchronous code in a way that feels natural and easy to follow.

### Example Using Async/Await:

```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data has been fetched!");
    }, 2000);
  });
}

async function main() {
  const data = await fetchData();
  console.log(data); // After 2 seconds, "Data has been fetched!" will be logged
}

main();
```

### Why Async/Await is Great:

1. **Simpler and Cleaner Code**: Instead of chaining multiple `.then()` calls, async/await lets us write code that looks like it’s synchronous, which is easier to follow and understand.
2. **Better Error Handling**: With promises, we need to use `.catch()` to handle errors. With async/await, we can handle errors using a simple `try/catch` block, which is more familiar and intuitive for most developers.
   
   ```typescript
   async function fetchData(): Promise<string> {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         reject("Something went wrong!");
       }, 2000);
     });
   }

   async function main() {
     try {
       const data = await fetchData();
       console.log(data);
     } catch (error) {
       console.error(error); // "Something went wrong!" will be logged after 2 seconds
     }
   }

   main();
   ```

3. **Avoid Callback Hell**: Async/await makes it easier to read and maintain asynchronous code without the need for deeply nested callbacks or chained promises.

4. **Sequential Execution**: If we have multiple asynchronous tasks, async/await ensures they run in the correct order, one after the other, while still being non-blocking.

## When Should We Use Async/Await?

1. **When we need to wait for multiple operations to complete in order**: Async/await makes it easy to write code that waits for one asynchronous task to finish before starting the next.

   Example:
   ```typescript
   async function getUserData() {
     const user = await getUser();
     const posts = await getPosts(user.id);
     console.log(posts);
   }
   ```

2. **When we want simple error handling**: The `try/catch` block is a much cleaner and more intuitive way to handle errors compared to promise `.catch()`.

3. **When we want more readable and clean code**: Async/await gives us the flexibility to write asynchronous code in a way that feels natural and doesn’t clutter up our code with chains of `.then()`.

## Conclusion

- **Callbacks** work, but they can quickly become messy and difficult to manage.
- **Promises** are a better option, allowing for cleaner code, but they can still get complex when chaining multiple promises.
- **Async/await** is the best way to handle asynchronous operations. It makes our code simpler, more readable, and easier to manage, especially for beginners.

async/await is the easiest and most modern way to deal with asynchronous operations. It makes the code much cleaner and easier to work with. So, give it a try in your projects and see how much smoother your asynchronous code can be!

Happy coding & happy learning ! 