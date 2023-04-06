const inquirer = require('inquirer');
const Shapes = require("./shapes");
const { writeFile } = require('fs/promises');
const { join } = require('path');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

const {Circle, Triangle, Square} = require('./component')


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

            // Variables used to create the SVG details
            let newShape = "";
            let userText = answers.logoText;
            let userShape = answers.shape;
            let userShapeColor = answers.shapeFillColor;
            let userTextColor = answers.textFillColor;

            if (userShape === "Circle") {
                newShape = new Circle(userText, userShapeColor, userTextColor).render();
                console.log(newShape);
                printSVG(newShape);
        
            } else if (userShape === "Triangle") {
                newShape = new Triangle(userText, userShapeColor, userTextColor).render();
                console.log(newShape);
                printSVG(newShape);

            } else {
                newShape = new Square(userText, userShapeColor, userTextColor).render();
                console.log(newShape);
                printSVG(newShape);
            }
        })
}

// Creates the final SVG file the user to view
function printSVG (svgShape) {
    return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), svgShape);
}

// Export all to the CLI
module.exports = displayQuestions;
