// Exporting and Internal packages 
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML.js");


//Prompt the user questions 
const promptUser = () => {
     return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter team member's name:",
        },
        {
            type: "list",
            name: "role",
            message: "Select team member's role:",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: "input",
            name: "id",
            message: "Enter team member's id: ",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the office number?",
            when: (input) => input.role === "Manager"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school?",
            when: (input) => input.role === "Intern"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter team member's github username:",
            when: (input) => input.role === "Engineer"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter team member's email address:"
        },
       
    ]);
     
};

// initilalize the application 
    const init = () => {
        promptUser()
        .then((input) => fs.writeFileSync("./utils/index.html", generateHTML(input))) // to use prompts and create hmtl 
        .then(() => console.log("You created a index.html!"))
        .catch((err) => console.error(err));
    };

    init( );
