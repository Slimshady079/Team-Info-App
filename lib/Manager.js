// imports parent class
const Employee = require("./Employee");
// manager is now a child class of Employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // allows access from Employee
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber = () => this.officeNumber;
  getRole = () => "Manager";
}

module.exports = Manager;
