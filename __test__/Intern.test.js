const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should create Intern with properties of name, id, email, school", () => {
        
            //Act
            const intern = new Intern('Phil', 39, 'phil@gmail.com', 'NYU');
            //Assert
            expect(intern.name).toEqual('Phil');
            expect(intern.id).toEqual(39);
            expect(intern.email).toEqual('phil@gmail.com');
            expect(intern.school).toEqual('NYU');


            
        });

        //Exception Test
        // it("should throw an error if property value is not provided", () => {
        //     const cb = () => new Intern();
        //     const err = new Error(
        //         "Expected parameter to be non empty string"
        //     );

        //     //Assert
        //     expect(cb).toThrowError(err);
        // });
    });
});