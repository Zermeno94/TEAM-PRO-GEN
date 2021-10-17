function generateHTML() {
    return `<!DOCTYPE html>
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
     Welcome!
    </div>
    <div class="card-body">
      <h1 class="card-title">TEAM PRO GEN </h1> 
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"></script>
</body>
</html>`;
};

function generateManager(employeeData){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
            <h2>${employeeData.name}</h2>
            <h3>${employeeData.getRole()}</h3>
        </div>
        <div class="card-text">
            <li>ID: ${employeeData.id}</li>
            <li>Email: mailto: ${employeeData.email}</li>
            <li>Office number: ${employeeData.officeNumber}</li>
        </div>
    </div>
</div>`;
};

function generateEngineer(employeeData){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
            <h2>${employeeData.name}</h2>
            <h3>${employeeData.getRole()}</h3>
        </div>
        <div class="card-text">
            <li>ID: ${employeeData.id}</li>
            <li>Email: mailto: ${employeeData.email}</li>
            <li>GitHub: ${employeeData.github}</li>
        </div>
    </div>
</div>`;
};

function generateIntern(employeeData) {
    return `<div class="card" style="width: 18rem;>
    <div class="card-body">
            <h2>${employeeData.name}</h2>
            <h3>${employeeData.getRole()}</h3>
        </div>
        <div class="card-text">
            <li>ID: ${employeeData.id}</li>
            <li>Email: mailto: ${employeeData.email}</li>
            <li>School: ${employeeData.school}</li>
        </div>
    </div>
</div>`;
};



module.exports = generateHTML,generateManager, generateEngineer,generateIntern;
