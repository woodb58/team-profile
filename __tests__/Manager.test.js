const Manager = require("../lib/Manager");

test("creates Manager", () => {
  const manager = new Manager("ted", 123, "ted@email.com");

  expect(manager.office).toEqual(expect.any(Number));
});

// Manager needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// Manager name, ID, email, *school
