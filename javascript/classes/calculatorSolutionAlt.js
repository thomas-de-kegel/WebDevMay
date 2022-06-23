class Calc {
  constructor(number1, number2) {
    this.result = 0;
    this.number1 = number1;
    this.number2 = number2;
  }

  //get result
  getResult(operator) {
    this.operator = operator;
    switch (operator) {
      case "+":
        this.result = this.number1 + this.number2;
        break;
      case "-":
        this.result = this.number1 - this.number2;
        break;
      case "*":
        this.result = this.number1 * this.number2;
        break;
      case "/":
        this.result = this.number1 / this.number2;
        break;
      default:
        console.log("!Invalied Operator!");
    }
  }

  //toString
  toString() {
    console.log(
      `${this.number1} ${this.operator} ${this.number2} = ${this.result}`
    );
  }
}

console.clear();
// let app = new Calc(20, 10, "+"); //20 + 10 = 30
// app.getResult();
// app.toString();

// let app2 = new Calc(25, 5, "*");
// app2.getResult();
// app2.toString();

// let app3= new Calc(30,15,'/');
// app3.getResult();
// app3.toString();

// let app4= new Calc(35,17,'-');
// app4.getResult();
// app4.toString();

let app = new Calc(21, 5);
app.getResult("-");
app.getResult("+");
app.getResult("/");
app.getResult("*");
app.toString();
