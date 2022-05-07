const Intern = require("../lib/Intern");

test("creates Intern", () => {
  const intern = new Intern("ted", "id", "ted@email.com", "school");

  expect(intern.school).toBe("school");
});
