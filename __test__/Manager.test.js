const Manager = require('../lib/Manager');

describe('Manager',()=>{
    describe('Initialization ',()=>{
        it('create an object for id and name',()=>{
            const manager=new Manager('Miranda',4,'email.4@gmail.com',11);

            expect(manager.name).toEqual('Miranda');
            expect(manager.id).toEqual(4);
            expect(manager.email).toEqual('email.4@gmail.com');
            expect(manager.offNum).toEqual(11);
        });
    });
    describe('getOff test',()=>{
        it(' return the office nuber',()=>{
            const manager=new Manager('Miranda',4,'email.4@gmail.com',11);

            expect(manager.getOff()).toEqual(11);
        });
    });
    
    describe('getRole test',()=>{
        it('return the Manager string',()=>{
            const manager=new Manager('Miranda',4,'email.4@gmail.com',11);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});


// Importing the Manager class  

// test for role


//test for office id 