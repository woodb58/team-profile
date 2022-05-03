const Manager = require("../lib/Manager");

test("creates Manager", () => {
  const manager = new Manager("ted", "id", "ted@email.com", "officeNumber");

  expect(manager.officeNumber).toBe("officeNumber");
});

// Manager needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// Manager name, ID, email, *school
