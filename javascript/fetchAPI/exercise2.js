const number1= document.getElementById("number1");
const number2 = document.getElementById("number2");
const sumBtn= document.getElementById("btn");

// do not use eval() otherwise you run the risk of people executing dangerous javascript
sumBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const num1 = Number(number1.value)
    const num2 = number2.value
    let result = eval(num1+num2)
    console.log(result)
})