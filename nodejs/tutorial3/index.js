//import fs(file system) module

const fs = require('fs');

//read a file

fs.readFile('./text.txt','utf8', (err, data) => { //returns as hexadecimal string by default. utf8 argument converts it to normal string
    console.log(data);
})