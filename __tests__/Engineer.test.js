const Engineer = require("../lib/Engineer");

test("creates engineer object", () => {
  const engineer = new Engineer("ted", "id", "ted@email.com", "github");

  expect(engineer.github).toBe("github");
});
