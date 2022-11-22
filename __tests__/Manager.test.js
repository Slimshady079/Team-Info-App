const { Manager } = require("../lib");

const name = "John Doe",
  id = 555,
  email = "jtest.com",
  officeNumber = 545;

const e = new Manager(name, id, email, officeNumber);

test("Testing getOffice method", () =>
  expect(e.getOfficeNumber()).toBe(officeNumber));
test("Testing getRole method", () => expect(e.getRole()).toBe("Manager"));
