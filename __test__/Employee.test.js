const Employee= require ("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toEqual("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Miranda";
        const employee = new Employee(name);
        expect(employee.name).toEqual(name);
    });

    it("Can set id via constructor argument", () => {
        const eTest = 4;
        const employee = new Employee("Miranda", eTest);
        expect(employee.id).toEqual(eTest);
    });

    it("Can set email via constructor argument", () => {
        const eTest = "email.4@gmail.com";
        const e = new Employee("Miranda", 4, testValue);
        expect(e.email).toEqual(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const eTest = "Miranda";
            const employee = new Employee(eTest);
            expect(employee.getName()).toEqual(eTest);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const eTest = 4;
            const employee = new Employee("Miranda", eTest);
            expect(employee.getId()).toEqual(eTest);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const eTest = "email.4@gmail.com";
            const employee = new Employee("Miranda", 4 , eTest);
            expect(employee.getEmail()).toEqual(eTest);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const eTest = "Employee";
            const employee = new Employee("Miranda", 4, "email.4@gmail.com");
            expect(employee.getRole()).toEqual(eTest);
        });
    });
    
});

//email of employee 

// id of employee 

 // role of employee 

