/*

string
numdber - long short byte float double
boolean 
undefined
object/array
null

*/

let result;
let typeOfVar;
//string data type
result = 'Hello Friend.'
result =1;
result = "1";
result = 1.5e5;
result = true;

var x;
//declared, but not assigned a value yet

//objects
var student = {
    name:"John",
    age:30,
    email:"John@john.com",
    isStudent: true,
    address:{
        country:"Belgium",
        city:"Brussels",
        street:"Stalingrad",
        zipcode:1000
    }
}
//nested objects are possible

//arrays
//array index numbers always start at 0 (0=1, 1="String" etc)
var numbers = [1,"String",true,null,{name:"John"},undefined,null];

result= numbers.length;
result = numbers[4];
result = numbers[4].name;
//we can also call specific properties of objects in an array
numbers[1] = "New String";
//we can also change array item's data like this
result = numbers;

// console.log(numbers);

// result = `His name is ${student.name} and he is ${student.age} years old. You can reach him at ${student.email}.`;

// result = student.isStudent? `His name is ${student.name} and he is ${student.age} years old. You can reach him at ${student.email}.` : "He is not a student."

var students= [
    {name:"Ersin", age:24,
    scores:[22,44,55,66,99]},
    {name:"Reshad", age:23},
    {name:"John", age:30},
]

//identifies type of data

result= students[0].scores[3];
var nestedArray = [1,2,3,[4,5,6,[7,8,9]]];
result= nestedArray[3][3][1];
//accessing the contents of a nested array
console.log(result, `Type of result: ${typeof result}`);