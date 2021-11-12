//Function to create card for Manager

const renderManagerCard = function (manager) {
    return `
    <div class="col-6 col-sm-4">
    <div class="card" style="width: 18rem;">
      <div class = "card-header">
        <i class="icon fas fa-coffee"></i>  
        <h5 class="card-title">${manager.name}</h5>
      </div>
    <div class="card-body">
            
        <h5 class="card-text">Manager</h5>
        <p class="card-text">ID: ${manager.id}</p>
        <p class="card-text">Email: ${manager.email}</p>
        <p class="card-text">Contact: ${manager.officeNumber}</p>

    </div>
  </div>

</div>
    
    `;
}


//Function to create card for Engineer

const renderEngineerCard = function (engineer) {
    return `
    <div class="col-6 col-sm-4">
    <div class="card" style="width: 18rem;">
      <div class = "card-header">
        <i class="icon fas fa-glasses"></i> 
        <h5 class="card-title">${engineer.name}</h5>
      </div>
    <div class="card-body">
          
        <h5 class="card-text">Engineer</h5>
        <p class="card-text">ID: ${engineer.id}</p>
        <p class="card-text">Email: ${engineer.email}</p>
        <p class="card-text">Github Profile: ${engineer.github}</p>

    </div>
  </div>
  </div>
    `;
}

//Function to create card for Intern

const renderInternCard = function (intern) {
    return `
    <div class="col-6 col-sm-4">
    <div class="card" style="width: 18rem;">
      <div class = "card-header">
        <i class="icon fas fa-graduation-cap"></i>
        <h5 class="card-title">${intern.name}</h5>
      </div>
    <div class="card-body">
            
        <h5 class="card-text">Intern</h5>
        <p class="card-text">ID: ${intern.id}</p>
        <p class="card-text">Email: ${intern.email}</p>
        <p class="card-text">School: ${intern.school}</p>

    </div>
  </div>

</div>
    `;
}
//function to add cards to list of employee /team group
renderHTMLpage = (answers) => {

  const teamMemberCards = answers.map((teamMember) => {
    const teamRole = teamMember.getRole();
    if (teamRole === 'Manager') {
      const managerInfo = renderManagerCard(teamMember);
      return managerInfo;
    }

    if (teamRole === 'Engineer') {
      const engineerInfo = renderEngineerCard(teamMember);
      return engineerInfo;
    }

    if (teamRole === 'Intern') {
      const internInfo = renderInternCard(teamMember);
      return internInfo
    }
  });
   
    const staffInfo = teamMemberCards.join('')
    const employeeGroup = createEmployeeGroup(staffInfo);
    return employeeGroup;
}

//Render the HTML page with all staff info as cards

const createEmployeeGroup = function (staffInfo) {
    return `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href ="../dist/style.css">
    <title>Team Profile Generator</title>
  </head>
  <body>

    <!--NAVBAR-->
    <nav class="navbar navbar-light justify-content-center">
       Team Profile Generator
        <!-- Navbar content -->
      </nav>



    <!--Employee Cards-->

    <div class="container">
     <div class="row">
    
    ${staffInfo}

</div>
 </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    
  </body>
</html>

    `;
}

module.exports = renderHTMLpage;






