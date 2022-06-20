// Switch statements
/*
switch (value) {
    case 1:
        //do something
        break;
    case 2:
        //do something else
        break;
    default:
        //Executed if no matches are found with the cases
        break;
};
//*/

var value = 3;
console.clear;

switch(value){
    case 1:
        console.log("value is 1");
        break;
    case 2:
        console.log("value is 2");
        break;
    default:
        console.log("value is not 1 or 2");
        break;
}

var date = new Date();

//console.log(date.getDay()); // #1 refers to monday
switch(date.getDay()){
    case 0:
        console.log("Today is sunday");
        break;
    case 1:
        console.log("Today is monday");
        break;
    case 2:
        console.log("Today is tuesday");
        break;
    case 3:
        console.log("Today is wednesday");
        break;
    case 4:
        console.log("Today is thursday");
        break;
    case 5:
        console.log("Today is friday");
        break;
    case 6:
        console.log("Today is saturday");
        break;
    default:
        console.log("!!!ERROR!!!");
        break;
}

const winner = "Joe";

switch (winner) {
    case "Dave":
        console.log("Dave is the winner!");
        break;
    case "Joe":
        console.log("Joe is the winner!");
        break;
    default:
        console.log("No winners today!")
        break;
}