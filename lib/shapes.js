// create a conditional function which will export the data of the shape that was selected
// based on this answer, we then will run a test to make sure the data is valid
// should be an easy test since we are selecting from a list, but good to get it implemented anyway.
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');
// const { createSVG } = require("./svgDoc");

function Shapes(shape, shapeFill) {
    const userShape = shape;
    const userShapeFill = shapeFill;
    // const userSVGText = renderShape(userShape, userShapeFill);

    if (userShape === "Circle") {
        const newShape = new Circle(150, 100, 80, userShapeFill).render();
        console.log(newShape);
        return newShape;

    } else if (userShape === "Triangle") {
        const newShape = new Triangle(userShapeFill).render();
        console.log(newShape)
        return newShape;

    } else {
        const newShape = new Square(100, 100, userShapeFill).render();
        console.log(newShape);
        return newShape;
    }
}

// Conditional statements to determine what shape is selected, and then creating the string based on the input
// function renderShape(shape, shapeFill) {

//     if (shape === "Circle") {
//         const newShape = new Circle(150, 100, 80, shapeFill).render();
//         return newShape;

//     } else if (shape === "Triangle") {
//         const newShape = new Triangle(shapeFill).render();
//         return newShape;

//     } else {
//         const newShape = new Square(100, 100, shapeFill).render();
//         return newShape;
//     }

// }

module.exports = Shapes;