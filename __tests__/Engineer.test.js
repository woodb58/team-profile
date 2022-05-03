const Engineer = require("../lib/Engineer");

test("creates engineer", () => {
  const engineer = new Engineer();

  expect(engineer.github).toEqual(expect.any(String));
});

// Intern needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// intern name, ID, email, *school
