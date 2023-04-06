const inquirer = require('inquirer');
const Shapes = require("./shapes");
const { writeFile } = require('fs/promises');
const { join } = require('path');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

const {Circle} = require('./component')


// Extending inquirer to limit input length for logo text
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const questions = [
    {
        type: "maxlength-input",
        maxLength: 3,
        message: "Please enter the text for your logo - Three characters or less.",
        name: "logoText"
    },

    {
        type: "list",
        name: "shape",
        message: "Please select the shape you would like",
        choices: ["Circle", "Triangle", "Square"]
    },

    // Conditional Statements for the shape fill color
    {
        name: "shapeFillColorOption",
        type: "list",
        message: "What kind of color do you want for the background image?",
        choices: ["Standard", "Hexadecimal"]
    },
    {
        name: "shapeFillColor",
        type: "list",
        choices: ["Red", "Yellow", "Blue", "Orange", "Green", "Violet"],
        when: function (answers) {
            return answers.shapeFillColorOption === "Standard";
        }
    },

    {
        type: "maxlength-input",
        maxLength: 7,
        name: "shapeFillColor",
        message: "Enter in hex number for your color (Please include #)",
        when: function (answers) {
            return answers.shapeFillColorOption === "Hexadecimal";
        }
    },

    // Conditional Statemenets for the text fill color
    {
        name: "textFillColorOption",
        type: "list",
        message: "What kind of color do you want for the text?",
        choices: ["Standard", "Hexadecimal"]
    },

    {
        name: "textFillColor",
        type: "list",
        choices: ["Red", "Yellow", "Blue", "Orange", "Green", "Violet"],
        when: function (answers) {
            return answers.textFillColorOption === "Standard";
        }
    },

    {
        type: "maxlength-input",
        maxLength: 7,
        name: "textFillColor",
        message: "Enter in hex number for your color (Please include #)",
        when: function (answers) {
            return answers.textFillColorOption === "Hexadecimal";
        }
    }
]

function displayQuestions() {
    inquirer
        .prompt(questions)
        .then((answers) => {

            console.log(answers);

            let userText = answers.logoText;
            let userShape = answers.shape;
            let userShapeColor = answers.shapeFillColor;
            let userTextColor = answers.textFillColor;

            const textString = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${userTextColor}">${userText}</text>`
            console.log(textString);

            if (userShape === "Circle") {
                const newShape = new Circle(userText, userShapeColor, userTextColor).render();
                console.log(newShape);
                printSVG(newShape);
        
            } else if (shape === "Triangle") {
                let newShape = new Triangle(shapeFill, text, textFill).render();
                // return newShape;
        
            } else {
                let newShape = new Square(shapeFill, text, textFill).render();
                // return newShape;
            }


            // return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), newShape);
        })
}

module.exports = displayQuestions;


function testShape(userShape) {

    if (userShape === "Circle") {
        const newShape = new Circle(userShapeColor, userTextColor).render();
        console.log(newShape);
        return newShape;

    } else if (shape === "Triangle") {
        const newShape = new Triangle(shapeFill, text, textFill).render();
        return newShape;

    } else {
        const newShape = new Square(shapeFill, text, textFill).render();
        return newShape;
    }
}

function printSVG (svgShape) {

    return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), svgShape);


}