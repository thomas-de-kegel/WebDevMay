//array methods
var result;
var myArr=[];
var myNumbers=[1,2,3,4,5,6,67,8,9,10];
var myLetters=["a","cb","h","d","e","f","g","egs","i","j"]

//push method
//pushes information into an array in the order they are listed.
myArr.push(1);
myArr.push("a");
myArr.push(true);
myArr.push(null);
myArr.push({name:"John"});

//pop method
//removes the last item from an array.
myArr.pop();

//shift method
//Same as pop but it's the first item instead.
myArr.shift();

//join method
result= myArr.join("-") //returns the array as a single string, with the paremeter dictating the symbol seperating the data.

//sort method
result= myLetters.sort(); //alphabetical order
result= myNumbers.sort(); //doesn't work, since we need an algorithm
result= myNumbers.sort(function(a,b){
    return a-b;
}) //this sorts it in numerical order
result= myNumbers.sort(function(a,b){
    return b-a;
}) //this sorts it in reverse numerical order

//concat method
result= myNumbers.concat(myLetters); //like before, just connects two bits of data

//iteration method (for, forEach, map, filter etc)
for(var i=0;i<result.length;i++){ //watch out for spaces, messes with the code
    console.log(result[i]);
}


console.log(result);