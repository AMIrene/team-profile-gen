const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create Engineer with properties of name, id, email, github username", () => {
        
            //Act
            const engineer = new Engineer('Jenn', 41, 'jen@gmail.com', 'jennj');
            //Assert
            expect(engineer.name).toEqual('Jenn');
            expect(engineer.id).toEqual(41);
            expect(engineer.email).toEqual('jen@gmail.com');
            expect(engineer.github).toEqual('jennj');

            
        });

        //Exception Test
        // it("should throw an error if property value is not provided", () => {
        //     const cb = () => new Engineer();
        //     const err = new Error(
        //         "Expected parameter to be non empty string"
        //     );

        //     //Assert
        //     expect(cb).toThrowError(err);
        // });
    });
});