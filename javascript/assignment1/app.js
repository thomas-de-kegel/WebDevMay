
let temperature = Math.floor(Math.random() * (31));


// if (temperature > 19) {
//     document.getElementById("scarf").innerHTML = "You do not need a scarf today!";
// } else {
//     document.getElementById("scarf").innerHTML = "You need a scarf today!";
// }

let cold = (temperature <= 20)? "You do need a scarf!" : "You don't need a scarf!";
document.getElementById("scarf").innerHTML = cold;

document.getElementById("tempDisplay").innerHTML = temperature;