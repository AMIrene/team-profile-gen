const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should create Manager with properties of name, id, email and contact number", () => {
        
            //Act
            const manager = new Manager('Fred', 49, 'fred@gmail.com', '042345679');
            //Assert
            expect(manager.name).toEqual('Fred');
            expect(manager.id).toEqual(49);
            expect(manager.email).toEqual('fred@gmail.com');
            expect(manager.officeNumber).toEqual('042345679');

            
        });

        //Exception Test
        // it("should throw an error if property value is not provided", () => {
        //     const cb = () => new Manager();
        //     const err = new Error(
        //         "Expected parameter to be non empty string"
        //     );

        //     //Assert
        //     expect(cb).toThrowError(err);
        // });
    });
});