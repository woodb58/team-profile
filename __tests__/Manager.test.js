const Manager = require("../lib/Manager");

test("creates manager object", () => {
  const manager = new Manager("ted", "id", "ted@email.com", "officeNumber");

  expect(manager.officeNumber).toBe("officeNumber");
});
