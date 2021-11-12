//Intern is subclass of Employee and will extend Employee class
//Intern has employee properties and methods
//Intern has school property
//Function getSchool() returns school name
//Function getRole() returs 'Intern'

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //access parent class Employee properties
        super(name, id, email);
        //intern has school property
        this.school = school;
    }
//function getSchool() returns school name
    getSchool() {
        return this.school;
    }

//function getRole() returns 'Intern'
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern; 