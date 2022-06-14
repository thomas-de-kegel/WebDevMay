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
    console.log(result[i]); //The reason we get each letter and number is because as i is counting up, we are calling the index number of the arrays each time, thus the console outputs every single item in the array in order
}

result.forEach(function(value,index,arrayitself){
    console.log(value,index,arrayitself); //This log will go over each value, show its index number, and then add on the entire array until it has covered every item in the array
})

var total=0;
// for(let i=0;i<myNumbers.length;i++){
//     console.log(myNumbers[i]);
//     total += myNumbers[i];
//     console.log(total);
// }


myNumbers.forEach(function(n){
    total += n //total + total = n
    result= `Total result is ${total}`;
})

//filter method
result = myNumbers.filter(function(value){ //will return any data that satisfies the set condition
    return value>=30;
})

result = myNumbers.filter(value=> value<=20);

console.log(result);