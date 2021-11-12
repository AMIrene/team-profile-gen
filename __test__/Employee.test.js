const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create Employee with properties of name, id, email", () => {
        
            //Act
            const employee = new Employee('Polly', 40, 'polly@gmail.com');
            //Assert
            expect(employee.name).toEqual('Polly');
            expect(employee.id).toEqual(40);
            expect(employee.email).toEqual('polly@gmail.com');

            
        });

        //Exception Test
        // it("should throw an error if property value is not provided", () => {
        //     const cb = () => new Employee();
        //     const err = new Error(
        //         "Expected parameter to be non empty string"
        //     );

        //     //Assert
        //     expect(cb).toThrowError(err);
        // });
    });
});