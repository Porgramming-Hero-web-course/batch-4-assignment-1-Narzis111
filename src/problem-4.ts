// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// // Sample Output 1:
// 78.54;

// // Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// // Sample Output 2:
// 24;

// Define the union types for Circle and Rectangle
type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

// Create a function to calculate the area of the shape using type guards
function calculateShapeArea(shape: Circle | Rectangle): number {
    if (shape.shape === "circle") {
        // Calculate the area of the circle: π * r^2
        return Math.PI * Math.pow(shape.radius, 2);
    } else if (shape.shape === "rectangle") {
        // Calculate the area of the rectangle: width * height
        return shape.width * shape.height;
    }
    // This should never be reached because of the type guards, but it's a fallback.
    throw new Error("Invalid shape");
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); 

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea); 
