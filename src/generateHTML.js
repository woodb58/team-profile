function generateHTML(data) {
  const generateManager = (manager) => {
    return `
        <div class="card bg-info m-3">
            <div class="card-header">
                <h2 class="card-title text-light">${manager.getName()}</h2>
                <h3 class="card-title text-light font-weight-light">${manager.getRole()}  <i class="fas fa-mug-hot mr-2"></i></h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
  };

  const generateEngineer = (engineer) => {
    return `
        <div class="card bg-success m-3">
            <div class="card-header">
                <h2 class="card-title text-light">${engineer.getName()}</h2>
                <h3 class="card-title text-light font-weight-light">${engineer.getRole()}  <i class="fas fa-glasses mr-2"></i></h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </div>
        `;
  };

  const generateIntern = (intern) => {
    return `
        <div class="card bg-warning m-3">
            <div class="card-header">
                <h2 class="card-title text-light">${intern.getName()}</h2>
                <h3 class="card-title text-light font-weight-light">${intern.getRole()}  <i class="fas fa-user-graduate mr-2"></i></h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
  };

  const team = [];
  team.push(
    data
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  team.push(
    data
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  team.push(
    data
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return team.join("");
}

module.exports = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"/>
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <link rel="stylesheet" href="../src/styles.css" />
        <title>Team Builder</title>
    </head>
    <body>
        <header class="col-12 justify-content-center bg-danger text-light">
        <p>Team Profile</p>
        </header>
        
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                 ${generateHTML(data)}
            </div>
        </div>
    </body>
    </html>
    `;
};
