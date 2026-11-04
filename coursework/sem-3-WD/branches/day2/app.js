// console.log("Hello World");
// console.log("Hello World");
// const cities = require("./data/mydata");
// console.log(cities);
// const chalk = require('chalk');
// console.log(chalk.blue('Hello, World!'));
// for module type we can use import instead of require
// import chalk from 'chalk';
// console.log(chalk.blue('Hello, World!'));

// for operating system we use os moduole 
// no for common.js
// const os = require('os');
// const userInfo = os.userInfo();
// const plateform = os.platform();
// const architechture = os.arch();
// const uptiome = os.uptime();
// console.log(userInfo);

//  for fs module
// for crud we use fs module
// const fs = require('fs');
// fs.writeFileSync('data/data.txt', 'Hello World');

// Process object is a global object that provides information about the currently
//  working application
// const process = require('process');
// console.log(process.argv[2]);

// dot env module is used to load environment variables from a .env file into process.env 
 require('dotenv').config();
 console.log(process.env.PORT);
