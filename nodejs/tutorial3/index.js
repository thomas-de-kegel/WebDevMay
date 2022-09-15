//import fs(file system) module

const fs = require('fs');

//read a file

/*
fs.readFile('./text.txt','utf8', (err, data) => { //returns as hexadecimal string by default. utf8 argument converts it to normal string
    console.log(data);
    console.log(data.split(','))
    data.split(',').forEach(name => console.log(name)); //returns the seperated bits of the array as actual strings
})
//*/

// read a directory
// fs.readdir('./',(err,data)=>{
//     // console.log(data)
//     let dirList = data.filter(filename=>filename.includes('.jpg'))
//     console.log(dirList)
// })

// read two files 
// fs.readdir('./',(err,data)=>{
//     // console.log(data) // list of all files in dir
//     let TxtFiles = data.filter(file=>file.includes('.txt')) // list of txt files
//     //console.log(TxtFiles)
//     // fs.readFile(TxtFiles[0],'utf8',(err,data)=>{
//     //     console.log(data)
//     // })
//     TxtFiles.forEach(txt=>{
//     //    console.log(txt) // txt > filename.txt
//         fs.readFile(txt,'utf8',(err,data)=>{
//             console.log(data,txt)
//         })
//     })
// })

function ReadFiles(ext){
    fs.readdir('./',(err,data)=>{
        let TxtFiles = data.filter(file=>file.includes(ext)) // list of txt files
        TxtFiles.forEach(txt=>{
            fs.readFile(txt,'utf8',(err,data)=>{
                console.log(data,txt)
            })
        })
    })
}

// ReadFiles('.java')
// ReadFiles('.doc')

// write File
// fs.writeFile('readme.txt','This is another test.',(err)=>{
//     console.log('File is created')
// })

// fs.writeFile('./public/readme.txt','readme file',(err)=>{
//     console.log('File is created')
//     if(err) throw console.log(err)
// })

// append File
// fs.appendFile('readme.txt','Extra string appended',(err)=>{
//     console.log("File is appended")
// })

// fs.appendFile('users.json','5',(err)=>{
//     console.log('file is appended')
// })

fs.readFile('users.json','utf8',(err,data)=>{
    let users = JSON.parse(data) // from string to array/object
    console.log(users,"before")
    users.push(5)
    console.log(users,"after")
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        console.log('file is updated')
    })
})