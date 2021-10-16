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
        <header class='banner valign-wrapper '>
            <h1 class='center-align'>Nakama Info Generator</h1>
        </header>
        <div class="container">`;

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></script>
}


module.exports = generateHTML;
