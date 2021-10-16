const Employee= require ("../lib/Employee");


describe('Employee',()=>{
    describe('Initialization',()=>{
        it('create an object for id and name',()=>{
            const employee=new Employee('Miranda',4,'email.4@gmail.com');

            expect(employee.name).toEqual('Miranda');
            expect(employee.id).toEqual(4);
            expect(employee.email).toEqual('email.4@gmail.com');
        });
    });
    describe('getName method test',()=>{
        it('should return the name',()=>{
            const employee=new Employee('Miranda',4,'email.4@gmail.com');

            expect(employee.getName()).toEqual('Miranda');
        });
    });
    describe('getId method test',()=>{
        it('should return the id',()=>{
            const employee=new Employee('Miranda',4,'email.4@gmail.com');

            expect(employee.getId()).toEqual(4);
        });
    });
    describe('getEmail method test',()=>{
        it('should return the email',()=>{
            const employee=new Employee('Miranda',4,'email.4@gmail..com');

            expect(employee.getEmail()).toEqual('email.4@gmail.com');
        });
    });
    describe('getRole method test',()=>{
        it('should return the Employee string',()=>{
            const employee=new Employee('Miranda',4,'email.4@gmail.com');

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});



//email of employee 

// id of employee 

 // role of employee 

