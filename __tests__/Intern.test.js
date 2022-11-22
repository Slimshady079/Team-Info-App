const { Intern } = require("../lib");

const name = "John Doe",
  id = 555,
  email = "jtest.com",
  school = 545;

const e = new Intern(name, id, email, school);

test("Testing getSchool method", () => expect(e.getSchool()).toBe(school));
test("Testing getRole method", () => expect(e.getRole()).toBe("Intern"));
