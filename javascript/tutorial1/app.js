let result;

result = 7 + 3;

result += 2; //adds 2 to the stored value of 10 (7+3) and redefines afterwards (12).
result -= 1;

//increase or decrease

// result++;
// ++result;

// var number1 = 50;
// number1 +=10;
// console.log(number1)

// let firstname = "John";
// let lastname = "Doe";
// result = firstname + " " + lastname;
// variables cannot start with a special character outside of $ or _

// var n1 = 5;
// var n2 = 5;
// var n3 = 6;
// var n4 = "5";

//equal to operator (case sensitive)
//undefined vars are equal in both value and type
// result= n1 === n4 ? "Yeh" : "Nah";

// console.log(result)

var age = 19;
var minimumage = 18;

//result= age >= minimumage ? "Jack is allowed to drink": "Jack is not allowed to drink";
//alt method
var name = "Jack";
var jackAge = age >= minimumage;

//using backtick (`) you can add in variables into the print by calling them with ${}
result = jackAge ? `${name} is allowed to drink` : `${name} is not allowed to drink`;

var studentName = "Jack";
var studentAge = 15;
var studentMoney = 10;

var studentRule1 = studentAge >= 18;
var studentRule2 = studentMoney >= 1;

result = studentRule1 && studentRule2 ? "Yes" : "No";

result = studentRule1 ? (studentRule2) ? "Ye" : "No" : "Nnnno";
console.log(result)

//if the first condition of a nested comparison is false, the nest part is completely skipped and a false result is given.
/*
var height = 1.78 * 1.78;
var weight = 95;
var BMI = weight / height;
var bruto = 2200;
var tax = bruto / 100 * 21;
var netto = bruto - tax;

console.log(BMI)
console.log(netto)

document.getElementById("Message").innerText = "Hello Pal!";
document.getElementById("Container").innerHTML = "<h1>AAAAAAAAA</h1>"; */

//single line comment

/*
multi line comment
*/

// var name = "John";
// var age = 29;
// var name = "Joe";

// console.log("Hello" + " " + name + ", aged " + age);
// console.log(name);

// const company = "Google";
// console.log(company);

// let website = "Google.com";
// website = "facebook.com";
// console.log(website);

  // Var keyword, can be redeclared, and value can be updated.
   // const keyword, cannot be redeclared, and value cannot be updated.
    // let keyword, cannot be redeclared, but value can be updated.