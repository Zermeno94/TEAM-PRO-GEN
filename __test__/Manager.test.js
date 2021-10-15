const Manager = require ("../lib/Manager");

describe("Can set office number via constructor argument", () => {
    const mTest = 200;
    const employee = new Manager("Miranda", 4, "email.4@gmail.com", mTest);
    expect(employee.officeNumber).toEqual(mTest);
  });
  
describe("getRole() should return \"Manager\"", () => {
    const mTest = "Manager";
    const employee = new Manager("Miranda", 4, "email.4@gmail.com", 100);
    expect(employee.getRole()).toEqual(mTest);
  });
  
  describe("Can get office number via getOffice()", () => {
    const mTest = 200;
    const employee = new Manager("Miranda", 4, "email.4@gmail.com", mTest);
    expect(employee.getOfficeNumber()).toEqual(mTest);
  });
// test for role


//test for office id 