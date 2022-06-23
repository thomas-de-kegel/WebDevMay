//Calculator with +, - and *. Store result in constructer var (result)
class Calculator{
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2;
    }

    //get first input
    getNumber1(number1){
        return this.number1;
    }   

    //get second input
    getNumber2(number2){
        return this.number2;
    }

    //calculate and show result
    getResult(){
        result = number1 + number2;
        return result;
    }
}

let calculation1 = new Calculator(3,5);
console.log(calculation1.number1,calculation1.number2);
calculation1.getResult();
console.log(calculation1.result);