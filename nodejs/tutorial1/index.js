console.log("Hello, NodeJS");

const fetch = require("node-fetch")

var a = 5;
var b = 10;
console.log("The sum of these numbers is", a+b);

const myArr=["a", "b", "c", "d", 1, 2, 3, 4, 5];
myArr.forEach(item =>{
    console.log(item)
})

//npm install node-fetch@2
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=>res.json())
.then(data=>console.log(data))