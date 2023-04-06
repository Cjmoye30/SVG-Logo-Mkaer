const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

function Shapes(shape, shapeFill, text) {
    const userShape = shape;
    const userShapeFill = shapeFill;
    const userText = text;
    // const userSVGText = renderShape(userShape, userShapeFill);

    if (userShape === "Circle") {
        const newShape = new Circle(150, 100, 80, userShapeFill, userText).render();
        return newShape;

    } else if (userShape === "Triangle") {
        const newShape = new Triangle(userShapeFill, userText).render();
        return newShape;

    } else {
        const newShape = new Square(100, 100, userShapeFill, userText).render();
        return newShape;
    }
}

module.exports = Shapes;