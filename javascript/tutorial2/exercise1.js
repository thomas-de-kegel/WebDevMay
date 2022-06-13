//BMI calc
//with normal function
function bmiCalc(weight,height){
    return weight / (height * height);
}

console.log(bmiCalc(80,1.78));

//with arrow function
let bmiCalc2 = (weight,height) => weight / (height * height);

console.log(bmiCalc2(80,1.78));

//Netto calc
//with normal function
function nettoCalc(salary,tax){
    let taxAmount = (salary*tax)/100;
    let getNetto = salary - taxAmount;
    return getNetto;
}

console.log(nettoCalc(1900,21));
//with arrow function

