const Employee = require("../lib/Employee");

test("create employee object", () => {
  const employee = new Employee("ted", "id", "ted@email.com");

  expect(employee.name).toBe("ted");
  expect(employee.id).toBe("id");
  expect(employee.email).toBe("ted@email.com");
});

// employee needs to have name, ID, email(mailto)
// manager name, ID, email, *office
// engineer name, ID, email, *github(new tab)
// intern name, ID, email, *school
