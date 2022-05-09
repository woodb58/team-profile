const Intern = require("../lib/Intern");

test("creates intern object", () => {
  const intern = new Intern("ted", "id", "ted@email.com", "school");

  expect(intern.school).toBe("school");
});
