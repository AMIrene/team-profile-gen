//Manager is a subclass of Employee and will extend Employee
//Manager has employee properties 
//Manager has office number
//Function getRole() returns 'Manager'

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //access parent class Employee properties
        super(name, id, email);
        //manager has office number property
        this.officeNumber = officeNumber;
    }

//function getRole() returns Manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager; 