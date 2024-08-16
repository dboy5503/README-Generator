// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import { type } from "os";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description about your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "How would a consumer install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How would a consumer use your project?",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can a user contribute to your project?",
    },
    {
        type: "input",
        name: "tests",
        message: "How can a user test your project?",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["MIT", "Apache", "GPL", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File created successfully!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile("READMEtest.md", markdown);
        })
}
// Function call to initialize app
init();
