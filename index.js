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


