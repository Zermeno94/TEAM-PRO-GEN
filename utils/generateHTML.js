// External and Internal packages 
const inquirer = require ("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

//  HTML webpage 
function generateHTML( input){
    console.log( input.role);
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!--BOOTSTRAP LINK  -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="styles.css">
        <title>TEAM-PRO-GEN</title>
    </head>
    <body>
        <div class = "container-fluid">
            <div class = "row d-flex justify-content-center">   
                <h1 class = "text-center"> My Team of Workers </h1>
            </div>
        </div>
        <div class = "container">
            <div class = "row d-flex justify-content-center">
                // ${x ? '1' : x ? '2' : '3'}
                ${generateEngineer(eEngineer)}
                ${generateIntern(eIntern)}
                
                
            </div>
        </div>
    </body>`
}

function generateEngineer(eEngineer) {

    let engineerHTML= "";
    for (i=0; i < eEngineer.length; i ++) {

    engineerHTML += `<div class = "col-sm-4">
    <div class = "card employee-card">
        <div class = "card-header">
            <h2 class = "card-title">${eEngineer[i].name}</h2>
            <h3 class = "card-title">Engineer</h3>
        </div>
        <div class = "card-body">
            <ul class = "list-group">
                <li class = "list-group-item">ID: ${eEngineer[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${eEngineer[i].email}">${eEngineer[i].email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${eEngineer[i].gitHub.gitHub}" target="_blank" rel="noopener noreferrer">${eEngineer[i].gitHub.gitHub}</a></li>
            </ul>
        </div>
    </div>
    </div>`
    };
    return engineerHTML;
}

function generateIntern(eIntern) {
    let internHTML= "";
    for (i=0; i < entern.length; i ++) {
        internHTML += `<div class = "col-sm-4">
        <div class = "card employee-card">
            <div class = "card-header">
                <h2 class = "card-title">${eIntern[i].name}</h2>
                <h3 class = "card-title">Intern</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">ID: ${eIntern[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${eIntern[i].email}">${eIntern[i].email}</a></li>
                    <li class="list-group-item">School: ${eIntern[i].school.school}</li>
                </ul>
            </div>
        </div>
        </div>`
    };
    return internHTML;
}

function generateManager(eManager) {
    let managerHTML = "";
    for (i=0; i < eManager.length; i ++) {
        managerHTML += `<div class = "col-sm-4">
        <div class = "card employee-card">
            <div class = "card-header">
                <h2 class = "card-title">${eManager[i].name}</h2>
                <h3 class = "card-title">Manager</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">ID: ${eManager[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${eManager[i].email}">${eManager[i].email}</a></li>
                    <li class="list-group-item">Office number: ${eManager[i].off.off}</li>
                </ul>
            </div>
        </div>
        </div>`
    };
    return managerHTML
    
}


module.exports = generateHTML;
