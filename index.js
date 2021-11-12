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


const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
            

        },

        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',

        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'id',

        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',

        },
        {
            type: 'input',
            message: 'What is your contact number?',
            name: 'officeNumber',
            when: (answer) => answer.role === "Manager",

        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
            when: (answer) => answer.role === "Engineer",

        },
        {
            type: 'input',
            message: 'What is your school name?',
            name: 'school',
            when: (answer) => answer.role === "Intern",

        },
        
    ])
        .then(userInput => {
            let { name, id, role, email, officeNumber, github, school } = userInput;
            let user;

            if (role === 'Manager') {
                 
                user = new Manager(name, id, email, officeNumber);
                console.log(user);
            }
            else if (role === 'Engineer') {
                user = new Engineer(name, id, email, github);
            }

            else if (role === 'Intern') {
                user = new Intern(name, id, email, school);
            }
        
            staffGroup.push(user);
        })
};

const addAnotherEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
            

        },

        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',

        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'id',

        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',

        },
        {
            type: 'input',
            message: 'What is your contact number?',
            name: 'officeNumber',
            when: (answer) => answer.role === "Manager",

        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
            when: (answer) => answer.role === "Engineer",

        },
        {
            type: 'input',
            message: 'What is your school name?',
            name: 'school',
            when: (answer) => answer.role === "Intern",

        },
        
        
    ])
    .then(newUserInput => {
        let { name, id, role, email, officeNumber, github, school } = newUserInput;
        let user;

        if (role === 'Manager') {
             
            user = new Manager(name, id, email, officeNumber);
            console.log(user);
        }
        else if (role === 'Engineer') {
            user = new Engineer(name, id, email, github);
        }

        else if (role === 'Intern') {
            user = new Intern(name, id, email, school);
        }
    
        staffGroup.push(newUserInput);
    })
};
    


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addEmployee()
  .then (addAnotherEmployee)
  .then(staffGroup => {
    return renderHTML(staffGroup);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });