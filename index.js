// Exporting and Internal packages 
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");


//Prompt the user questions 
function promptUser(){
     inquirer.prompt([
        {
            type: "input",
            name: "member name",
            message: "Enter team member's name?",
        },
        {
            type: "list",
            name: "role",
            message: "Select team member's role. ",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: "input",
            name: "id",
            message: "Enter team member's id. ",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter team member's email address"
        },
       
    ]).then((input) => {

        const message= generateMarkdown(input)
        fs.writeFileSync('./output/readme.md',message, (err)=>err? console.log(err): console.log(generateReadme)); 
        console.log(input)
        
    }).catch(function(){
        console.log("promise rejected")
    }) 

};

  const init= () => { // Prints out README.md to 'output' file 
    promptUser()
    // console.log('Successfully wrote to README.MD');
        
  };

  init();  


// Need to include variables for employess




// Questions to user//
// manager's name
// employee ID 
// email address
//office number 

// present with a menu w/ the option to add an engineer or an intern or finish building my team 

// select engineer option 
// prompt to enter : engineer's name, ID, email, and GitHub username 
//taken back to the menu

// same thing for intern
