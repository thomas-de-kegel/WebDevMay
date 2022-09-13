//custom modules
//const {getAge,getName,getTodos} = require('./my_modules/sum')
const calculator = require('./my_modules/calculator') //when importing a function you don't add the {}

//get result of sum module
//console.log(getAge(18))
//console.log(getName("John"))

/*
getTodos()
.then(data=>{
    console.log(data)
}) //*/

calculator(1,'+',8)