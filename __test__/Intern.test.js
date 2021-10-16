const Intern= require ("../lib/Intern");

escribe('Intern',()=>{
  describe('Initialization',()=>{
      it(' create an Intern object',()=>{
          const intern=new Intern('Miranda',4,'email.4@gmail.com','schoolName');

          expect(intern.name).toEqual('Miranda');
          expect(intern.id).toEqual(4);
          expect(intern.email).toEqual('email.4@gmail.com');
          expect(intern.school).toEqual('schoolName');
      });
  });
  describe('getSchool test',()=>{
      it('return the git hub user name',()=>{
          const intern=new Intern('Miranda',4,'email.4@gmail.com','fooU');

          expect(intern.getSchool()).toEqual('schoolName');
      });
  });
  
  describe('getRole test',()=>{
      it('return the Intern string',()=>{
          const intern=new Intern('Miranda',4,'email.4@gmail.com','schoolName');

          expect(intern.getRole()).toEqual("Intern");
      });
  });
});

