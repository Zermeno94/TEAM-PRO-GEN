const Employee= require ("./lib/Employee");

describe("Employee", () =>{ //create new employee
    it("Create Employee", () => {
        const employee = new Employee();
        expect(new(employee)).toBe("new");
    });

    it("Create name of employee", ()=>{ // name of employee
        const name =" ";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    })

})

//email of employee 

// id of employee 

 // role of employee 

