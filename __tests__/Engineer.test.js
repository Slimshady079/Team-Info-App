const { Engineer } = require("../lib");

const name = "John Doe",
  id = 555,
  email = "jtest.com",
  github = 545;

const e = new Engineer(name, id, email, github);

test("Testing getGithub method", () => expect(e.getGithub()).toBe(github));
test("Testing getRole method", () => expect(e.getRole()).toBe("Engineer"));
