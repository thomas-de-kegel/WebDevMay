fetch = require('node-fetch'); //import fetch module

module.exports = {
    getName:function(name){
        return name;
    },
    getAge:function(age){
        return age;
    },
    getTodos:async function(){
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data= await response.json();
        return data;
    }
}