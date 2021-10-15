const Intern= require ("../lib/Intern");

describe("Can set school via constructor", () => {
    const iTest = "SMU";
    const employee = new Intern("Miranda", 4, "email.4@gmail.com", iTest);
    expect(employee.school).toBe(iTest);
  });
  
  describe("getRole() should return \"Intern\"", () => {
    const iTest = "Intern";
    const employee = new Intern("Miranda", 4, "email.4@gmail.com", "SMU");
    expect(employee.getRole()).toBe(iTest);
  });
  
  describe("Can get school via getSchool()", () => {
    const iTest = "SMU";
    const employee = new Intern("Miranda", 4, "email.4@gmail.com", iTest);
    expect(employee.getSchool()).toBe(iTest);
  });

//test for school 

// test for role 