const Engineer = require ("./lib/Engineer");

describe("Engineer", () => {
    const eTest= "GitHubUser";
    const engineer= new Engineer("Miranda", 1, "email.4@gmail.com", etest);
    expect(engineer.github).toBe(eTest);
  });
  
  describe("getRole() should return \"Engineer\"", () => {
    const eTest = "Engineer";
    const engineer = new Engineer("Miranda", 1, "email.4@gmail.com", "GitHubUser");
    expect(engineer.getRole()).toBe(eTest);
  });
  
  describe("Can get GitHub username via getGithub()", () => {
    const eTest = "GitHubUser";
    const engineer = new Engineer("Miranda", 4, "email.4@gmail.com", eTest);
    expect(engineer.getGithub()).toBe(eTest);
  });
// test for GitHub

//test for role
