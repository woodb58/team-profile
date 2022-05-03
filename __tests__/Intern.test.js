const Intern = require("../lib/Intern");

test("creates Intern", () => {
  const intern = new Intern("ted", "id", "ted@email.com", "school");

  expect(intern.school).toBe("school");
});

// Intern needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// intern name, ID, email, *school
