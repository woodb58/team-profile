const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

module.exports = Engineer;

// employee needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// intern name, ID, email, *school
