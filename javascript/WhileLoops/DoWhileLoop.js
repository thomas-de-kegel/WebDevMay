//Do while loops
// !!! A do while loop will always triggers once even if the condition is false, but it won't continue afterwards

var i=0;

/*
do{

i++;
console.log(i);

}while (i<10) {
    
}; //*/

do {
    var getRandomNumber = Math.floor(Math.random() * 100);
    console.log(getRandomNumber);
    i++;
} while (i<=10);

//while loop