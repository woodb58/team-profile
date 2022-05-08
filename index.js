const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML.js");
const path = require("path");
const pathDist = path.resolve(__dirname, "dist");
const insertHTML = path.join(pathDist, "index.HTML");

let team = [];

const openingPrompt = function () {
  console.log("Welcome to Team Profile Builder!");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team Manager's name?",
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
        message: "Enter the team Manager's employee ID?",
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
        message: "Enter the team Manager's email address?",
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
        message: "What is the team Manager's office number?",
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
      console.log(`${manager.name} has been added to your team`);
      addEmployee();
    });
};

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add another employee?",
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
          console.log(
            "Your team has been generated. Please visit the distribution folder to find your HTML document."
          );
          generateTeam();
      }
    });
}

const promptEngineer = function () {
  console.log("Enter Engineer's information");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
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
        message: "Enter the Engineer's employee ID?",
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
        message: "Enter the Engineer's email address?",
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
        message: "What is the Engineer's github username?",
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
      console.log(`${engineer.name} has been added to your team`);
      addEmployee();
    });
};

const promptIntern = function () {
  console.log("Enter Intern information");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is Intern's name?",
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
        message: "Enter Intern's employee ID?",
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
        message: "Enter Intern's email address?",
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
      console.log(`${intern.name} has been added to your team`);
      addEmployee();
    });
};

const generateTeam = () => {
  fs.writeFileSync(insertHTML, generateHTML(team), function (err) {
    if (err) {
      throw err;
    }
  });
};

openingPrompt();
