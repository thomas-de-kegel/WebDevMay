//math object - index.js
var result;
//pi number
result = Math.PI; //make sure to write Math with capital M, otherwise it won't work

//round method
result = Math.round(2000.6); //rounds the number up or down depending on the decimal

//power method
result = Math.pow(2, 3);

//Square root method
result = Math.sqrt(64);

//Find max number
result = Math.max(33,55,66,77,33,99); //returns the highest value

//Find min number
result = Math.min(44,55,11,566,25);

//absolute value
result = Math.abs(-4); //returns the absolute value of a number

//random number

result = Math.random();
result = Math.round((Math.random()*10));

function getRandomNumberRange(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

result= getRandomNumberRange(1,10); //making a flexible number gen

console.clear();
console.log(result);