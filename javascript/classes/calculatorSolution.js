class Calc{
    constructor(number1,number2){
        this.result= 0;
        this.number1= number1;
        this.number2= number2;
    }

    add(){
        return this.result= this.number1 + this.number2;
    }

    subtract(){
        return this.result= this.number1 - this.number2;
    }

    multiply(){
        return this.result= this.number1 * this.number2;
    }

    divide(){
        return this.result= this.number1 / this.number2;
    }

    toString(){
        console.log(`Result is ${this.result}`);
    }

}

let app = new Calc(10,5);
//math operation
app.add();
app.subtract();
app.multiply();
app.divide();

//get result
app.toString();