const inquirer = require('inquirer');
const fs = require('fs');

//import the html page render function file

const renderHTML = require('./src/renderHTML');

// import employee class and subclass files 

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Employees set up as an array

const staffGroup = [];

const addAnEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        },

        {
            type: 'input',
            message: 'Enter name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter employee ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter employee email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter contact number',
            name: 'officeNumber',
            when: (input) => input.role === 'Manager',
        },
        {
            type: 'input',
            message: 'Enter Github username',
            name: 'github',
            when: (input) => input.role === 'Engineer',
        },
        {
            type: 'input',
            message: 'Enter school name',
            name: 'school',
            when: (input) => input.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Keep adding employees?',
            default: false
        }
    ])
        .then(teamDetails => {
            let { name, id, email, role, officeNumber, github, school, addAnotherEmployee } = teamDetails;
            let staffMember;

            if (role === 'Manager') {
                staffMember = new Manager(name, id, email, officeNumber);
            }
            else if (role === 'Engineer') {
                staffMember = new Engineer(name, id, email, github);
            }

            else if (role === 'Intern') {
                staffMember = new Intern(name, id, email, school);
            }
            staffGroup.push(staffMember);
            if (addAnotherEmployee) {
                return addAnEmployee(staffGroup);
                
            }
            else {
                return staffGroup;
            }
        })
};

const writeFile = answers => {
    fs.writeFile('./dist/index.html', answers, err => {
        // if eror
        if (err) {
            console.log(err);
            return;
        // if success 
        } else {
            console.log("Success!")
        }
    })
}; 

addAnEmployee()

  .then(staffGroup => {
    return renderHTML(staffGroup);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });