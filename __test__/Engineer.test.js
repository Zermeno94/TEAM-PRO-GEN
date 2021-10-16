const Engineer = require ("../lib/Engineer");

describe('Engineer',()=>{
  describe('Initialization',()=>{
      it('create an object for an id and name',()=>{
          const engineer=new Engineer('Miranda',4,'email.4@gmail.com','zermenoHub');

          expect(engineer.name).toEqual('Miranda');
          expect(engineer.id).toEqual(4);
          expect(engineer.email).toEqual('email.4@gmail.com');
          expect(engineer.gitHub).toEqual('zermenoHub');
      });
  });
  describe('gitHub test',()=>{
      it('return the git hub user name',()=>{
          const engineer=new Engineer('Miranda',4,'email.4@gmail.com','zermenoHub');

          expect(engineer.gitHub()).toEqual('zermenoHub');
      });
  });
  
  describe('getRole test',()=>{
      it('return the Engineer string',()=>{
          const engineer=new Engineer('Miranda',4,'email.4@gmail.com','zermenoHub');

          expect(engineer.getRole()).toEqual("Engineer");
      });
  });
});

