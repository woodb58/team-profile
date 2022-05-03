const Intern = require("../lib/Intern");

test("creates Intern", () => {
  const intern = new Intern("ted", 123, "ted@email.com");

  expect(intern.school).toEqual(expect.any("String"));
});

// Intern needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// intern name, ID, email, *school
