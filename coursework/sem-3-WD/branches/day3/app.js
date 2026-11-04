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
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1 style='color:red'>Hello World</h1>
            <p>Welcome to my first node js application</p>
            `);
    } else {
        res.writeHead(404, { 'Content-Type': 'aplication/json' });
        res.end(JSON.stringify({ error: 'Route not found' }));

    }
});
server.listen(3000, () => console.log('running on : 3000'));
// post request try 
   

// require('dotenv').config();
// const Port = process.env.PORT|| 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     res.write('<h1>Hello World</h1>');
//     res.write('<p>Welcome to my first node js application</p>');

//     res.end();
// });

// server.listen(Port, () => {
//     console.log(`Server is running on port ${Port}`);
// });
