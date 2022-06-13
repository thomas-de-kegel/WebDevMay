var number=0; //this number will only increase if it's in global scope, otherwise it only increases once
const inputValue= document.getElementById("Username");

function clickHandler(event){
    //event.preventDefault();
    number ++;
    console.log(`Clicked the button ${number} time(s)`);
}

/*
function inputHandler(event){
    console.log("Hello," + inputValue.value);
    //we need to specify .value because otherwise we're only pringing the const itself, not its value
}
*/

//alt way of writing this function that includes less typing in the HTML doc
inputValue.addEventListener("change", function(event){
    console.log("Hello," + inputValue.value);
})

const registerBtn = document.getElementById("register");

registerBtn.addEventListener("click", function(event){
    console.log("Register button clicked")
})