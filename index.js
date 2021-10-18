//node modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML.js");
//team members
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
// staff array 
const staffArray = []; 

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "team memmber's role", 
            choices:[
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
    ]).then(function (input){
        console.log(input)
        if(input.role === "Engineer"){
            inquirer.prompt ([
                {
                    type: "input",
                    name: "name",
                    message: "Enter team member's name:",
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter team member's id: ",
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is team member's GitHub username?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is team member's email?"
                }
            ]).then(function(engineerInput){
                const  newEngineer = new Engineer(engineerInput.name, engineerInput.id,engineerInput.github,engineerInput.email);
                console.log(newEngineer);
                staffArray.push(newEngineer);
                addUser();
            });
        } else if (input.role === "Manager"){
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter team member's name:",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is team member's email?"
                },
                {
                    type: "input",
                    name: "office",
                    message: "Enter office number:"
                }
            ]).then.apply(function (managerInput){
                const  newManager = new Manager(managerInput.name,managerInput.email,managerInput.office);
            })
        } else if (input.role === "Intern"){
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter team member's name:",
                },
                {
                    type: "input",
                    name: "school",
                    message: "Enter team member's college:"
                }
            ]).then(function (internInput){
                const newIntern = new Intern(internInput.name,internInput.school);
                console.log(newIntern)
                staffArray.push(newIntern);
                addUser();
            });
        } 
    })  .catch(function(err) {
        console.log(err);
    });
};


    const init = () => {
        promptUser()
        .then((input) => fs.writeFileSync("./utils/index.html", generateHTML(Engineer,Manager,Intern))) // to use prompts and create hmtl 
        .then(() => console.log("You created a index.html!"))
        .catch((err) => console.error(err));
    };

    init( );


// //Prompt the user questions 
// const promptUser = () => {
//      return inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "Enter team member's name:",
//         },
//         {
//             type: "list",
//             name: "role",
//             message: "Select team member's role:",
//             choices: [
//                 "Manager",
//                 "Engineer",
//                 "Intern"
//             ]
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Enter team member's id: ",
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: "What is the office number?",
//             when: (input) => input.role === "Manager"
//         },
//         {
//             type: 'input',
//             name: 'school',
//             message: "Please enter the intern's school?",
//             when: (input) => input.role === "Intern"
//         },
//         {
//             type: "input",
//             name: "github",
//             message: "Please enter team member's github username:",
//             when: (input) => input.role === "Engineer"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Please enter team member's email address:"
//         },
       
//     ]);
     
// };

//prompt to each employee
// menu function, that allows user to add another teamber and if user wants to end prompt
// need to store the object/values
// use that sore method to pass in html()
//

// // initilalize the application 
//     const init = () => {
//         promptUser()
//         .then((input) => fs.writeFileSync("./utils/index.html", generateHTML(input))) // to use prompts and create hmtl 
//         .then(() => console.log("You created a index.html!"))
//         .catch((err) => console.error(err));
//     };

//     init( );
