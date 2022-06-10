console.log("functions.js");

/*

regular function
arrow function

*/

/*
function getSum(){
    //here function scope

    var getResult= 1+1;
    console.log("Get Sum Function", getResult);
    return 0;
}

getSum(); */

//console.log(getSum());

function getSumOfNumbers(n1,n2){
    return n1+n2; //the function returns the first value plus the second value
} 

console.log(getSumOfNumbers(4,5));
// getSumOfNumbers({id:1},null);

var Student ={
    name:"Joe",
    age:25,
    isStudent:true,
    isTeacher:false,
    scores:[11,22,33,44,55,66,77,88]
}

function verifyStudent(studentParam){
    console.log(studentParam); //function scope
    let isStudent = studentParam.isStudent;
    console.log(isStudent);
    return isStudent? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}` : "They are not a student."
}

//arrow function
const verifyStudent2 = studentParam => {
    let isStudent= studentParam.isStudent;
    console.log("Arrow Function");
    return isStudent? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}`: "They're not a student."
}

const getSumOfNumbers = (n1,n2) => n1+n2;
const testArrowFunction = ()=>console.log("Hello arrow function")

// console.log(verifyStudent(Student));

console.log(getSumOfNumbers(4,5));
testArrowFunction();