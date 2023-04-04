// create a conditional function which will export the data of the shape that was selected
// based on this answer, we then will run a test to make sure the data is valid
// should be an easy test since we are selecting from a list, but good to get it implemented anyway.

function Shapes(shape) {

    const userShape = shape;
    renderShape(userShape);
    console.log("Hello from shapes!");
    // console.log(`User shape was a ${shape}`);

}

function renderShape (shape) {

    if (shape === "Circle") {
        console.log(`<circle cx="25" cy="75" r="20"/>`)
        return `<circle cx="25" cy="75" r="20"/>`;
    } 

}

module.exports = Shapes;