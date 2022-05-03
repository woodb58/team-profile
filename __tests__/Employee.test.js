const Employee = require("../lib/Employee");

test("create employee object", () => {
  const employee = new Employee("ted", "id", "ted@email.com");

  expect(employee.name).toBe("ted");
  expect(employee.id).toBe("id");
  expect(employee.email).toBe("ted@email.com");
});

test("gets employee name", () => {
  const employee = new Employee("ted", "id", "ted@email.com");

  expect(employee.getName()).toBe("ted");
});

test("gets employee id", () => {
  const employee = new Employee("ted", "id", "ted@email.com");

  expect(employee.getId()).toBe("id");
});

test("gets employee email", () => {
  const employee = new Employee("ted", "id", "ted@email.com");

  expect(employee.getEmail()).toBe("ted@email.com");
});

test("gets employee email", () => {
  const employee = new Employee("ted", "id", "ted@email.com");

  expect(employee.getRole()).toBe("Employee");
});

// employee needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// intern name, ID, email, *school
