const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
// employee needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *school(new tab)
// intern name, ID, email, *school
