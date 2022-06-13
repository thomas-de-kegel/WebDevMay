//String methods
var result;
const myText = "lorem ipsum delor sit amet";

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

console.log(result);