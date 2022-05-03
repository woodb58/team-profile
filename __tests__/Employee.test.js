// const Employee = require("../lib/Employee");

test("creates employee", () => {
  const employee = new Employee("ted", 123, "ted@email.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// employee needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// intern name, ID, email, *school
