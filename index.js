const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [];

const openingPrompt = function () {
  console.log("Welcome to Team Profile Builder!");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Manager's name is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the team manager's employee ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Manager's ID is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the team manager's email address?",
        validate: (input) => {
          if (!input || !input.includes("@") || !input.includes(".")) {
            console.log(" Please enter a valid email address");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Manager's office number is required");
            return false;
          }
        },
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      team.push(manager);
      console.log(team);
      addEmployee();
    });
};

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Add another employee?",
        choices: ["Engineer", "Intern", "done with team"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.addEmployee) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;
        default:
          generateTeam();
      }
    });
}

const promptEngineer = function () {
  console.log("enter engineer information");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team Engineer's name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Engineer's name is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the team Engineer's employee ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Engineer's ID is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the team Engineer's email address?",
        validate: (input) => {
          if (!input || !input.includes("@") || !input.includes(".")) {
            console.log(" Please enter a valid email address");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the team Engineer's github username?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Engineer's github user name required");
            return false;
          }
        },
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      team.push(engineer);
      console.log(team);
      addEmployee();
    });
};

const promptIntern = function () {
  console.log("enter Intern information");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team Intern's name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Intern's name is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the team Intern's employee ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Intern's ID is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the team Intern's email address?",
        validate: (input) => {
          if (!input || !input.includes("@") || !input.includes(".")) {
            console.log(" Please enter a valid email address");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school did the Intern attend?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Intern's school required");
            return false;
          }
        },
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      team.push(intern);
      console.log(team);
      addEmployee();
    });
};

function generateTeam() {
  console.log(team);
  const teamString = team
    .map((team) => {
      return `
    <div class="card employee-card">
  <div class="card-header">
    <h2 class="card-title">${Manager.name}</h2>
    <h3 class="card-title">
      <i class="fas fa-mug-hot mr-2"></i>${Manager.name}
    </h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${Manager.id}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${Manager.email}">${Manager.email}</a>
      </li>
      <li class="list-group-item">
        Office number: ${Manager.officeNumber}
      </li>
    </ul>
  </div>
</div>
    `;
    })
    .join("");
  const htmlString = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>

  </body>
  </html>`;
  // use fs to create HTML file
}
openingPrompt();
