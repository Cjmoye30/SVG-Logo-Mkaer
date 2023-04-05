
// prompt the user
// import the inquirer package
const inquirer = require('inquirer');
const Shapes = require("./shapes");
const { createSVG } = require('./svgDoc')
const { writeFile } = require('fs/promises');
const { join } = require('path');


const questions = [
    {
        type: "input",
        message: "Please enter the text for your logo - Three characters or less.",
        name: "logoText"
    },
    {
        type: "list",
        name: "shape",
        message: "Please select the shape you would like",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "list",
        name: "fillColor",
        message: "Shape Fill Color - Would you like to enter in a Hexadecimal number, or select from standard colors",
        choices: ["Hexadecimal", "Standard Colors"]
    },
]

const colorDetails = [
    {
        type: "list",
        name: "selectedFillColor",
        message: "Please select from the list of six colors.",
        choices: ["Red", "Yellow", "Blue", "Orange", "Green", "Violet"]
    },
    {
        type: "input",
        name: "HexFillColor",
        message: "Enter in hex number for your color",

    },
]

function displayQuestions() {
    inquirer
        .prompt(questions)
        .then((answers) => {

            let userText = answers.logoText;
            const userShape = answers.shape;

            if (answers.fillColor === "Standard Colors") {
                inquirer
                    .prompt(colorDetails[0])
                    .then((answers) => {
                        return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), createSVG(Shapes(userShape, answers.selectedFillColor, userText)));
                    })
            }
        })
}
// test test
module.exports = displayQuestions;