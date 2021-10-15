const Employee= require ("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Miranda";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const eTest = 4;
        const employee = new Employee("Miranda", eTest);
        expect(employee.id).toBe(eTest);
    });

    it("Can set email via constructor argument", () => {
        const eTest = "email.4@gmail.com";
        const e = new Employee("Miranda", 4, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const eTest = "Alice";
            const employee = new Employee(eTest);
            expect(employee.getName()).toBe(eTest);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const eTest = 4;
            const employee = new Employee("Miranda", eTest);
            expect(engineer.getId()).toBe(eTest);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const eTest = "email.4@gmail.com";
            const employee = new Employee("Miranda", 4 , eTest);
            expect(employee.getEmail()).toBe(eTest);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const eTest = "Employee";
            const e = new Employee("Miranda", 4, "email.4@gmail.com");
            expect(employee.getRole()).toBe(eTest);
        });
    });
    
});



//email of employee 

// id of employee 

 // role of employee 

