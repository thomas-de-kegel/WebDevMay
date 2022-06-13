/*

const student={
    name:"John Dalton",
    age:25,
    education:"Software Engineer",
    projects:["a","b","c","d","e","f"],
    print: function(){
        console.log("print function")
        console.log(this.name)
        console.log(this)
        //"this" refers to the parent object, thus allowing access to the name,age etc properties. In global scope it refers to the whole doc.
    }
}

student.print()

*/
// !!don't use arrow functions in objects!!

const name="Joe" //global scope

function localScopeFunction(){
    const name = "Dalton";
    console.log(name); //local scope name
}

localScopeFunction();
console.log(name); //global scope name

const Tools = {
    bmiCalculator:function(weight,height){
        let bmi= weight/(height*height);
        console.log(`BMI result is ${bmi}`);
    },
    nettoSalary:function(salary,tax){
        let netSalary= salary - ((salary * tax)/100);
        console.log(`Your netto salary is ${netSalary}`);
    }
}

Tools.bmiCalculator(90,1.78);
Tools.nettoSalary(2100,21);

const Computer ={
    screen:"Iiyama",
    keyboard:"Logitech",
    mouse:"Logitech",
    cpu:"AMD Ryzen",
    gpu:"Nvidia GTX1080TI",
    power: false,
    turnon:function(){
        this.power = true;
        console.log("Computer is turning on.");
        console.log(`
        screen:${this.screen}
        Keyboard:${this.keyboard}
        mouse:${this.mouse}
        CPU:${this.cpu}
        GPU:${this.gpu}
        `
        );
    },
    turnoff:function(){
        this.power = false;
    },
    status:function(){
        const computerStatus = this.power ? "Computer is running" : "Computer is turned off";
        console.log(computerStatus);
    }
}

Computer.turnon();
Computer.status();

function number1(){
    console.log(1);
    return 1;
}

function number2(){
    console.log(2);
    return 2;
}
//without return it doesnt register as a number and returns NaN
console.log(number1() + number2());