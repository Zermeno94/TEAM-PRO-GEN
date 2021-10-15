
//  HTML webpage 
// five boxes listing employee name, titles, and other key info -->
function generateHTML(date){
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
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">TEAM PRO GEN</span>
        </nav>
        <div class="container">
            <div id="employee"><div class="row">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">Employee</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"></li>
                <li class="list-group-item"></li>
                <li class="list-group-item"></li>
            </ul>
            </div>
        </div> 
    </div>
    </div>

    <!-- JAVASCRIPT LINK-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.js"></script>
</body>
</html>`
}

module.exports = generateHTML;
