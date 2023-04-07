// Importing the Shapes.js file so we can run our tests
const { Circle, Triangle, Square } = require('../shapes.js')

// A testing suite for Circle
describe('Circle', () => {
    test('should render the correct dimensions', () => {
        const text = "abc";
        const fill = "blue";
        const textFill = "yellow";
        const svgReqs = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M10 10"/>`

        const expectedSVG = 
        `
        ${svgReqs}
        <circle cx="150" cy="100" r="80" fill="${fill}"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textFill}">${text}</text>
        </svg>
        `;

        const shape = new Circle(text, fill, textFill);
        expect(shape.render()).toEqual(expectedSVG);
    });
});

// A testing suite for Triangle
describe('Triangle', () => {
    test('should render the correct dimensions', () => {
        const text = "abc";
        const fill = "blue";
        const textFill = "yellow";
        const svgReqs = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M10 10"/>`

        const expectedSVG = 
        `
        ${svgReqs}
        <polygon points="150, 18 244, 182 56, 182" fill="${fill}"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textFill}">${text}</text>
        </svg>
        `;

        const shape = new Triangle(text, fill, textFill);
        expect(shape.render()).toEqual(expectedSVG);
    });
});

// A testing suite for Square
describe('Square', () => {
    test('should render the correct dimensions', () => {
        const text = "abc";
        const fill = "blue";
        const textFill = "yellow";
        const svgReqs = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M10 10"/>`

        const expectedSVG = 
        `
        ${svgReqs}
        <rect width="100%" height="100%" fill="${fill}"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textFill}">${text}</text>
        </svg>
        `;

        const shape = new Square(text, fill, textFill);
        expect(shape.render()).toEqual(expectedSVG);
    });
});
