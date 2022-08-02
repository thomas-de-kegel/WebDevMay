//window object

//local storage
const userInput = document.querySelector(".userinput"); //queryselector requires a . before the name in order to select a class or # in order to select an id
const saveButton = document.querySelector(".savebutton");
const getUsername = document.querySelector(".getusername");


saveButton.addEventListener("click", () => {
    console.log(`Hello there, ${userInput.value}`);
    localStorage.setItem(`username: ${userInput.value}`);
})

getUsername.addEventListener("click", () =>{
    let username = localStorage.getItem("username");
    console.log(`Username is ${username}`);
})
