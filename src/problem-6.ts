// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

// // Sample Input :
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

// // Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }

// Define the Profile interface
interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  // Define the updateProfile function
  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    // Use Object.assign to merge the updates into the original profile
    return { ...profile, ...updates };
  }
  
  // Sample Usage:
  
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  
  // Update the profile with the new age
  const updatedProfile = updateProfile(myProfile, { age: 30, email: "n@gmail.com" });
  
  console.log(updatedProfile);
  // Output: { name: "Alice", age: 26, email: "alice@example.com" }
  