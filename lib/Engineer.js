//Engineer is a subclass of Employee and will extend Employee.
//Engineer has employee properties, and has github
// Github returns github username
//Function getGithub() returns github username
//Function getRole() returns 'Engineer'

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //access parent class Employee args
        super(name, id, email);
        //engineer has github property
        this.github = github;
    }

//function getGithub() returns github username
    getGithub() {
        return this.github;
    }
//function getRole() returns 'Engineer'
    getRole() {
        return 'Engineer';
    }
    
}

module.exports = Engineer;