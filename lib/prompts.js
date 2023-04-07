const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { join } = require('path');

// Extension of inquirer to add a max length field on prompts as needed
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// Importing all the shapes in order to create one based on the user input
const {Circle, Triangle, Square} = require('../shapes');

// All questions stored in a variable
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
        choices: ["Red", "Yellow", "Blue", "Orange", "Green", "Violet", "White", "Black"],
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
        choices: ["Red", "Yellow", "Blue", "Orange", "Green", "Violet", "White", "Black"],
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

// Getting user input
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

            // Conditional statements to create the shape the user selected
            if (userShape === "Circle") {
                newShape = new Circle(userText, userShapeColor, userTextColor).render();
                // console.log(newShape);
                printSVG(newShape);
        
            } else if (userShape === "Triangle") {
                newShape = new Triangle(userText, userShapeColor, userTextColor).render();
                // console.log(newShape);
                printSVG(newShape);

            } else {
                newShape = new Square(userText, userShapeColor, userTextColor).render();
                // console.log(newShape);
                printSVG(newShape);
            }
        })
}

// Creates the final SVG file the user to view with a confirmation in the console
function printSVG (svgShape) {
    console.log("Logo Generated!")
    return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), svgShape);
}

// Export all to the CLI
module.exports = displayQuestions;



// switch (shape) {
//     case
// }