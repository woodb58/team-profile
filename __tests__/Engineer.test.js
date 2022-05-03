const Engineer = require("../lib/Engineer");

test("creates engineer", () => {
  const engineer = new Engineer("ted", "id", "ted@email.com", "github");

  expect(engineer.github).toBe("github");
});

// Intern needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// intern name, ID, email, *school
