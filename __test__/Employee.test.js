const Employee= require ("./lib/Employee");

describe("Employee", () =>{ //create new employee
    it("should create employee name, id, and email ", () => {
        const employee = new Employee("Miranda", 11, "email.4@gmail.com");
        expect(employee.name).toEqual("Miranda");
        expect(employee.id).toEqual(11);
        expect(employee.email).toEqual("email.4@gmail.com");
    });

    it("should provide error", () => {
        const throwBack= new Employee();
        expect(throwBack).toThrow();
    });

    it("should provide an error if name only is provided", () =>{
        const throwBack = () => new Employee("Miranda");
        expect(throwBack).toThrow(err);
    });


})


//email of employee 

// id of employee 

 // role of employee 

