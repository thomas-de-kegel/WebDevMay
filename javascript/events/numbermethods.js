//number methods
var result;

var n1= "1";
var n2= 2;
var n3= "10.5";
var n4= "10 15 20";
var n5= "10,15,20";
var n6= "9e+2";
var n7= 10e+2; //scientific notation
const PI= 3.14159265359;

//toString() method
result= n2.toString(); //converts a number to a string

//parseInt() method
result = parseInt(n1); //returns an intiger from the data if possible

result= parseInt("10") + parseInt("10");

//parseFloat() method
result= parseFloat(n3); //same as parseInt but for a float

//toExponent() method
result= PI.toExponential(1); //returns a string with a number that's rounded and written in exponential notation. Parameter defines number of characters behind decimal point

//toFixed() method
result= PI.toFixed(3); //returns a string with a number and an indicated amount of characters behind the decimal point. Perfect for working with money

//Number() method
result= Number(10);
result= Number(undefined);
result= Number(null);
result= Number(true);
result= Number(false);

result= Number.MAX_VALUE;
result= Number.MIN_VALUE;
result= Number.MAX_SAFE_INTEGER;
result= Number.MIN_SAFE_INTEGER;
result= Number.POSITIVE_INFINITY;
result= Number.NEGATIVE_INFINITY;
result= Number.NaN;
result= Number.isFinite(10);
result= Number.isFinite(Infinity);
result= Number.isFinite(NaN);
result= Number.isInteger("10");
result= Number.isNaN("bla");
result= Number.isSafeInteger(10);

//Boolean that checks if the given parameter is true or false. Can be used to check if a user gave the right type of input with an if statement

//




console.log(result, typeof result);