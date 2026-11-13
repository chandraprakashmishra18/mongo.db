// const cities = require('./mydata');
// console.log(cities);
// import chalk from 'chalk'
// console.log(chalk.blue("Hello, World!"));

// const os = require('os');
// const userInfo = os.userInfo();
// const platform = os.platform();
// const architecture = os.arch();
// const uptime = os.uptime();

// console.log(userInfo);
// console.log(platform);
// console.log(architecture);
// console.log(uptime);

// const fs = require('fs');
// fs.writeFileSync('data/data.txt', 'Hello, World!');

// const path = require('path');
// const filePath = path.join(__dirname, 'data','data.txt');
// console.log(filePath);

// const process = require('process');
// console.log(process.argv[2]);

require('dotenv').config();
console.log(process.env.PORT);