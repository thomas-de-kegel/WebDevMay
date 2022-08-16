import socialmedia from "./component/socialmedia";

/*
function AnotherComponent(){
    return(
        <div>
            <h1>Hello Friends!</h1>
        </div>
    )
}

export default AnotherComponent;

//*/

export default function ChildComponent(){
    //declare a variable
    const companyName= "Google";
    const someResult = 5*7;
    function getSumOfNumber(a,b){
        return a+b;
    }
    const printStudentName = name => {
        return name;
    }
    const numbers= [1,2,3,4,5,6,7,8,9,10];

    return(
        <div>
            <h1>Hello Hello hello!</h1>
            <h2>Heeeeeeellooo</h2>
            {companyName}
            <h1>{someResult}</h1>
            <h2>{getSumOfNumber(2,5)}</h2>
            <h3>{printStudentName("Jim")}</h3>
            {console.log(companyName)}
            {}
        </div>
    )
}