let die1, die2;
const rollBtn = document.getElementById("RollBtn");
let scoreTally = document.getElementById("GameScore");
let die1Roll = document.getElementById("Die1Roll");
let die2Roll = document.getElementById("Die2Roll");
let score = 0;

function RollDice() {
    die1 = Math.round(Math.random() * (6 - 1) + 1);

    die2 = Math.round(Math.random() * (6 - 1) + 1);

    console.log(die1, die2);
    die1Roll.innerText = die1;
    die2Roll.innerText = die2;

    if (die1 == die2) {
        console.log("!!!");
        score++;
        scoreTally.innerText = score;
    }

    return die1, die2;
};



rollBtn.addEventListener("click", function (e) {
    RollDice();
});

