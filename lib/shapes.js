// create a conditional function which will export the data of the shape that was selected
// based on this answer, we then will run a test to make sure the data is valid
// should be an easy test since we are selecting from a list, but good to get it implemented anyway.
const Circle = require('./circle');
const Square = require('./square');


function Shapes(shape, shapeFill) {
    const userShape = shape;
    const userShapeFill = shapeFill;
    const userSVGText = renderShape(userShape, userShapeFill);
    console.log(userSVGText);
}

// Conditional statements to determine what shape is selected, and then creating the string based on the input
function renderShape(shape, shapeFill) {

    if (shape === "Circle") {
        const newShape = new Circle(150, 100, 80, shapeFill).render();
        return newShape;

    } else if (shape === "Triangle") {
        const newShape = new Triangle();
        return newShape;
        
    } else {
        const newShape = new Square(100, 100, shapeFill).render();
        return newShape;
    }
}

// class Circle {
//     constructor(cx, cy, r, fill) {
//         this.cx = cx;
//         this.cy = cy;
//         this.r = r;
//         this.fill = fill;
//     }
//     render() {
//         const shapeString = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`
//         console.log(shapeString);
//     }
// }
// class Square {
//     constructor(w, h, fill) {
//         this.w = w;
//         this.h = h;
//         this.fill = fill;
//     }

//     render() {
//         const shapeString = `<rect width="${this.w}%" height="${this.h}%" fill="${this.fill}" />`
//         console.log(shapeString);
//     }
// }

// // holding off on this one for now
// class Triangle {
//     constructor(cx, cy, r, fill) {
//         this.cx = cx;
//         this.cy = cy;
//         this.r = r;
//         this.fill = fill;
//     }
// }

// should be exporting the circle, triangle, or square
module.exports = Shapes;