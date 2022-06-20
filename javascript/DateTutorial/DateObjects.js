let result;
let lead = document.querySelector('.lead'); //selected by its element and class name
let date = new Date(); //new keyword when making a new object

//get full year

result = date.getFullYear();
lead.innerHTML = result;

//get month
lead.innerHTML = date.getMonth();

//toLocalString
result = date.toLocaleString();
//lead.innerHTML = date.toLocalString();
lead.innerHTML = date.toLocaleString('nl-BE');

/*

window.setInterval(UpdateTime, 1000);


function UpdateTime() {
    let date2 = new Date();
    var hours, minutes, seconds;
    hours = date2.getHours();
    minutes = date2.getMinutes();
    seconds = date2.getSeconds();
    lead.innerHTML = `${hours}:${minutes}:${seconds}`;

}

*/
var DaysInNederlands = ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]

lead.innerHTML = DaysInNederlands[date.getDay()];

result = date.setFullYear(2021,01,01)

console.log(result);