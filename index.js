// Node Modules 
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');
const path = require('path');


//team member classes 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// staff of employee array 
const staffArr = [];

//prompts to user 
const employeeApplication = function () {

const userInput = function () {
   return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select team member to add?',
            choices: [ 
                "Manager",
                "Engineer",
                "Intern",        
            ]
        }
   ])
    //prompt to manager
            .then((input) => {
                if(input.role === "Manager") {
                    // manager questions 
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter team member\'s name:"
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Enter team member\'s id:'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is team member\'s email?'
                        },
                        {
                            type: 'input',
                            name: 'office',
                            message: "Enter team member\'s office number?"
                        },
                        //team member (manager)class that redirects to the staff array 
                    ]).then(function (input) {
                        const manager = new Manager(input.name, input.id, input.email, input.office);
                        staffArr.push(manager)
                        console.log('Success! You added a manager ✅	 ') // console log to user once roles prompts are completed &  included emoji
                        addNewEmployee()
                    })
                } else if (input.role === "Engineer") {
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter team member\'s name:"
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Enter team member\'s id:'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is team member\'s email?'
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "Enter team member\'s GitHub username:"
                        },
                    ]) .then(function (input) {
                        const engineer = new Engineer(input.name, input.id, input.email, input.github)
                        staffArr.push(engineer)
                        console.log('Success! You added a engineer ✅	 ') // console log to user once roles prompts are completed &  included emoji
                        addNewEmployee()
                    })
                } else if (input.role === "Intern") {
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter team member\'s name:"
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Enter team member\'s id:'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is team member\'s email?'
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "What school did team member attend?"
                        },
                    ]) .then(function(Input) {
                        const intern = new Intern(Input.name, Input.id, Input.email, Input.school)
                        staffArr.push(intern)
                        console.log('Success! You added a intern ✅	 ')// console log to user once roles prompts are completed &  included emoji
                        addNewEmployee()
                    })              
                }
        })

}

const addNewEmployee = function () {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "newMember",
            message: "Do you want to add another  team member 💁‍♀️",    // askes user if they wish to enter another team member &  included emoji
        }
    ]).then((input) => {
        if(input.addNewEmployee === true){
            userInput();
        } else {
            console.log(staffArr[0].name)
            inputCompleted(staffArr);
        }
    });
};

// pushes user answer/input to the generateHTML
function inputCompleted(staffArr) {
fs.writeFileSync("./utils/index.html",generateHTML(staffArr), "utf-8")
console.log("Yay! You created a index.html 👏 ") //  console log to user that they have generated a index.html 
    }
userInput()
}
employeeApplication(); 
