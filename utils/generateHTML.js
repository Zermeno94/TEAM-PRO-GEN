const renderArr= [];

const  genManager= (managerData) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
            <h2>${managerData.name}</h2>
            <h3>${managerData.getRole()}</h3>
        </div>
        <div class="card-text">
            <li>ID: ${managerData.id}</li>
            <li>Email: mailto: ${managerData.email}</li>
            <li>Office number: ${managerData.officeNumber}</li>
        </div>
    </div>
</div>`;
};


const genEngineer = (engineerData) => {
    return `                
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineerData.name}</h2>
            <h3 class="card-title"><i class="fas fa-hat-wizard"></i> ${engineerData.role}</h3>
        </div>
        <div class="card-body">
            
                <div class="group-item">ID: ${engineerData.id}</div>
                <div class="group-item">Email: <a href="mailto: ${engineerData.email}">${ engineerData.email}</a></div>
                <div class="group-item">GitHub: <a href="https://github.com/${engineerData.github}" target="_blank">${engineerData.github}</a></div>
            
        </div>
    </div>
    `
};

const genIntern = (internData) => {
    return `  
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${internData.name}</h2>
                    <h3 class="card-title"><i class="fas fa-user-ninja"></i> ${internData.role}</h3>
                </div>
                <div class="card-body">
                    
                        <div class="group-item">ID: ${internData.id}</div>
                        <div class="group-item">Email: <a href="mailto:${internData.email}">${internData.email}</a></div>
                        <div class="group-item">School: ${internData.school}</div>
                    
                </div>
            </div>
            `
};

const renderStaffArr = (staffArr) => {
    staffArr.forEach(teamMember => {
             
        const role = teamMember.getRole()

        switch(role) {
            case 'Manager': 
                const managerItem = genManager(teamMember );
                renderArr.push(managerItem);
                break;
            case 'Engineer':
                const engineerItem = genEngineer(teamMember );
                renderArr.push(engineerItem);
                break;
            case 'Intern':
                const internItem = genIntern(teamMember );
                renderArr.push(internItem);
                break;
            default: 
                return "Error in switch";
        }

    })
    const finalStaff = renderArr.join(``)
    return finalStaff;
};


function generateHTML(staffArr) {
return `
<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
        <title>TEAM-PRO-GEN</title>

    </head>
    <div class="container">
              <div class="row justify-content-center" id="team-cards">
    <body>
   <div class="card">
    <div class="card-header">
     Welcome to TEAM PRO GEN!
    </div>
    <div class="card-container">
    ${renderStaffArr(staffArr)}
    </div>
  
</section>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"></script>
</body>
</html>`
}


module.exports = generateHTML;


// prompt to each employee
// menu function, that allows user to add another teamber and if user wants to end prompt
// need to store the object/values
// use that sore method to pass in html()

