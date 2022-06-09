let temperature = Math.floor(Math.random() * (31));

// if (temperature > 19) {
//     document.getElementById("scarf").innerHTML = "You do not need a scarf today!";
// } else {
//     document.getElementById("scarf").innerHTML = "You need a scarf today!";
// }

//Cold will display either "You do need a scarf" or "You don't need a scarf", this will then be added in the Result Id in the HTML doc, as well as the value of temperature.
let cold = (temperature <= 20)? "You do need a scarf!" : "You don't need a scarf!";
document.getElementById("result").innerHTML = cold;
document.getElementById("tempDisplay").innerHTML = temperature;

