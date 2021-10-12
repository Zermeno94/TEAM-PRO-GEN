const Employee= require ("./lib/Employee");

describe("Employee", () =>{ //create new employee
    it("should create employee name, id, and email ", () => {
        const employee = new Employee("Miranda", 11, "email.4@gmail.com");
        expect(employee.name).toEqual("Miranda");
        expect(employee.id).toEqual(11);
        expect(employee.email).toEqual("email.4@gmail.com");
    });

})


//email of employee 

// id of employee 

 // role of employee 

