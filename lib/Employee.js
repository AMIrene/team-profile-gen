//Employee Class Declaration
//accepts arguments name, ID, email
//functions 
    //getName() which returns name, 
    //getId() which returns id, 
    //getEmail() which returns email, 
    //getRole() that returns 'Employee'

class Employee {
constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    
//function getName() which returns employee name
    getName() {
       return this.name
    }
    
//function getId() which returns id
    getId() {
        return this.Id
    }
//function getEmail() which returns email
    getEmail() {
        return this.email
    }
//function getRole() that returns 'Employee'
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;
