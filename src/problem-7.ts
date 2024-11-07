// Create a TypeScript class Car with properties make, model, 
// and year. Include a method getCarAge that returns the car's 
// age based on the current year. Constructor to initialize the car properties & Method to calculate the car's age


class Car{
    make: string;
    model: string;
    year: number;

constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
}   
getCarAge(): number{
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
}
}
// new car instance
const car = new Car("Honda", "Civic", 2018);
// calculation of car's age
// console.log(car.getCarAge());
