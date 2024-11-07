// Define the Car class
class Car {
    make: string;
    model: string;
    year: number;

    // Constructor to initialize the car properties
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to calculate the car's age
    getCarAge(): number {
        const currentYear = new Date().getFullYear(); // Get the current year
        return currentYear - this.year; // Calculate the age of the car
    }
}

// Sample Usage:

// Create a new car instance
const car = new Car("Honda", "Civic", 2018);

// Get the car's age
console.log(car.getCarAge()); // Output: 6 (if current year is 2024)
