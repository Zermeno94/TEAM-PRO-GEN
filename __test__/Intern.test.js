const Intern= require ("../lib/Intern");

describe("Can set school via constructor", () => {
    const iTest = "SMU";
    const employee = new Intern("Miranda", 4, "email.4@gmail.com", iTest);
    expect(employee.school).toEqual(iTest);
  });
  
  it("getRole() should return \"Intern\"", () => {
    const iTest = "Intern";
    const employee = new toEqual("Miranda", 4, "email.4@gmail.com", "SMU");
    expect(employee.getRole()).toEqual(iTest);
  });
  
  it("Can get school via getSchool()", () => {
    const iTest = "SMU";
    const employee = new Intern("Miranda", 4, "email.4@gmail.com", iTest);
    expect(employee.getSchool()).toEqual(iTest);
  });

//test for school 

// test for role 