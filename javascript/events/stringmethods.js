//String methods
var result;
const myText = "lorem ipsum lorem delor sit amet";

//length
result = myText.length;
//shows how many characters are in the string
result = myText[2];
//shows the indicated character. so 0=l,1=o,2=r etc...
result = myText[myText.length-1];
//gives the last character of the string without needing to manually adjust the array index number
console.log(result);

//concat() method
var firstName= "John ";
var lastName= "Doe";
result = firstName.concat(lastName);
//combines the first string with the second string
result= "Jim".concat(" Bob");
//Alt way of writing

//startwith() and endwith() methods
result = myText.endsWith("amet");
//Boolean to check if the string ends with indicated word
result = myText.startsWith("lorem");
//Boolean to check if the string starts with indicated word

//includes method
result= myText.includes("ipsum");
//Checks the whole string to see if the indicated word(s) is there

//index of method
result= myText.indexOf("sit");
//shows after how many characters this value is found in the string

//replace method
result= myText.replace("lorem" , "Picsum");
//replaces a chosen piece of the string with the second value
result= myText.replaceAll("lorem" , "Pocsum");
//replaces ALL instances of a chosen piece of the string with the second value

//split method
result= myText.split(" ");
//splits the string into parts as indicated by the 'selector' and turns them into an array. 
//Space will give the individual words.

//slice method
result= myText.slice(0,7);
//extracts the text from the given range in the array.

const myText2= "                Lorem Ipsum                 ";

//time method
result=myText2.trim();
//removes unneeded spaces from the string

//caps method
result= myText.toLocaleLowerCase();
result= myText.toLocaleUpperCase();
//converts the string into all lowercase or uppercase

const myText3= "lorem ipsum lorem dolor sit amet 1234567891011";

//match method
result= myText3.match(/lorem/g);
//finds the indicated part of the string and shows its location. Adding a g turns it into a global search which just highlights all cases
//adding gi will turn it into a global search that is case-insensitive

console.log(myText3);
console.log(result);

