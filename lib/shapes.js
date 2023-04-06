const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');



function Shapes(shape, shapeFill, text, textFill) {

    if (shape === "Circle") {
        const newShape = new Circle(shapeFill, text, textFill).render();
        return newShape;

    } else if (shape === "Triangle") {
        const newShape = new Triangle(shapeFill, text, textFill).render();
        return newShape;

    } else {
        const newShape = new Square(shapeFill, text, textFill).render();
        return newShape;
    }
}

module.exports = Shapes;

// const         <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        // <path d="M10 10"/>

        // this can be renamed to something else? would that cause issues?