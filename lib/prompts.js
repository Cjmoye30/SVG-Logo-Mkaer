const inquirer = require('inquirer');
const Shapes = require("./shapes");
const { writeFile } = require('fs/promises');
const { join } = require('path');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

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

            return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), Shapes(userShape, userShapeColor, userText, userTextColor));
            // let userText = answers.logoText;
            // let userShape = answers.shape;

            // Conditional statements to determine the color fill - standard or hex
            // if (answers.fillColor === "Standard Colors") {
            //     inquirer
            //         .prompt(colorDetails[0])
            //         .then((answers) => {

            //             let userShapeColor = answers.selectedFillColor;


            //         })
            // }

            // else {
            //     inquirer
            //         .prompt(colorDetails[1])
            //         .then((answers) => {

            //             let userShapeColor = `#${answers.hexFillColor}`;

            //             return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), Shapes(userShape, userShapeColor, userText));
            //         })
            // }
        })


}

module.exports = displayQuestions;
