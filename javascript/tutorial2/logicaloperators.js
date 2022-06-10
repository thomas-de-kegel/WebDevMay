console.log("logical operators");
//or operator

var n1=5;
var n2=10;
var n3="5"; //string
var n4="10"; //string

let result;

result = (n1<n2) || (n3<n4);

var isUserLogginIn = false;

result = !isUserLogginIn;

var isLightOn = false;

//clicked on light-switch = true
result = !isLightOn;
isLightOn= !isLightOn;

//clicked again = false
result = !isLightOn;


console.log(result);