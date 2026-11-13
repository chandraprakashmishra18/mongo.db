// console.log('Hello, I am Vicky')

// const cities = require("./data/mydata.js");
// console.log(cities);
// const chalk= require("chalk");
// console.log(chalk.blue("Hello, World!"));
// import chalk from "chalk";
// console.log(chalk.blue("Hello, World!"));

// const os = require("os");
// const userinfo = os.userInfo();
// const platform = os.platform();
// const architecture = os.arch();
// const uptime = os.uptime();
// console.log(userInfo);
// console.log(platform);
// console.log(architecture);
// console.log(uptime);



//  const fs = require('fs');
//  fs.writeFileSync('data/data.txt', 'My name is Vicky',);
 
// const path = require('path');
// const filePath = path.join(__dirname, 'data', 'data.txt');
// console.log(filePath);

// const process= require("process");
// console.log(process.argv[2]);

require("dotenv").config();
console.log(process.env.PORT);