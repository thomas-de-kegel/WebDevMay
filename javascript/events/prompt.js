const Result = document.getElementById("Result"); //makes it so the text in the H2 with id Result is equal to the value of Result
var userInput= prompt("Enter a number, please."); //prompt shows a window that accepts user input

console.log(userInput, typeof userInput); //input comes in as a string
userInput = isNaN(userInput) ? "!!!NOT A NUMBER!!!" :  "Your number is " + userInput; //this checks if the input is a number or not
Result.innerText= userInput; //returns the result into the H2 in HTML