const Number1 = document.getElementById("Number1");
const Number2 = document.getElementById("Number2");
const Result = document.getElementById("Result");

var userInput1 = prompt("Please enter the first number."); 
userInput1 = isNaN(userInput1) ? Number(prompt("Please enter an actual number!")) : Number(userInput1);
console.log(userInput1, typeof userInput1);

var userInput2 = prompt("Please enter the second number.");
userInput2 = isNaN(userInput2) ? Number(prompt("Please enter an actual number!")) : Number(userInput2);
console.log(userInput2, typeof userInput2);

Number1.innerText= userInput1;
Number2.innerText= userInput2;
Result.innerText= userInput1 + userInput2;