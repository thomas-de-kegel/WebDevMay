// getting-started.js
const mongoose = require("mongoose");
const prompt = require("prompt");

main().catch((err) => console.log(err));

// ||functions||

//Connect to mongoDB
async function main() {
  await mongoose.connect("mongodb://localhost:27017/budget", (err) => {
    console.log("Connected to MongoDB");
  });

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//Check if month has been registered already
function checkMonth(month) {
  return MonthlyBudget.exists({
    month: month,
  }).then((res) => res);
}

prompt.start();

// ||Add a new monthly budget||
function addBudget() {
  prompt.get(["month", "income"], (err, budget) => {
    const monthlyBudget = new MonthlyBudget(budget);
    checkMonth(budget.month)
      .then((month) => {
        month === null
          ? monthlyBudget.save().then((data) => {
              console.log("Monthly budget saved.");
            })
          : console.log("This month's budget has already been written.");
      })
      .finally(() =>
        setTimeout(() => {
          console.clear();
          Menu();
        }, 2000)
      );
  });
}

// ||Update a month's expences
function updateExpences(budgetMonth) {
  prompt.get('expenses', (err, budget) => {
    budgetMonth.expences.push(budget);
    budgetMonth.save().then((data)=>{
      console.log(data, "New expences saved.");
    })
  });
}

// ||Schema setup||
// 1. make a schema
const budgetSchema = new mongoose.Schema({
  month: { type: String, lowercase: true },
  income: { type: Number, min: 0 },
  expences: [Number],
  remaining: {
    type: Number,
    default: function () {
      return this.income - this.expences.reduce((a, b) => a + b, 0);
    },
  },
});

// 2. compile schema to model
const MonthlyBudget = mongoose.model("budget", budgetSchema);

// 3. example monthly budget object
/*const monthlyBudget = {
  month: "September 2022",
  income: 1800,
  expences: [123, 4, 20, 42, 14, 80, 54],
}; //*/

// ||Menu interface||
function Menu() {
  console.log(`
    ||  Monthly budget app v0.1  ||    
╬═════════════════════════════════════╬
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
║░████░░█░░░█░████░░░███░░█████░█████░║
║░█░░░█░█░░░█░█░░░█░█░░░█░█░░░░░░░█░░░║
║░████░░█░░░█░█░░░█░█░░░░░███░░░░░█░░░║
║░█░░░█░█░░░█░█░░░█░█░███░█░░░░░░░█░░░║
║░█░░░█░█░░░█░█░░░█░█░░░█░█░░░░░░░█░░░║
║░████░░░████░████░░░███░░█████░░░█░░░║
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
╬═════════════════════════════════════╬
    ||Choose what function to run||    
    `);
  console.log(`
    1. Register New Month\n
    2. Update Month's Expenses\n
    3. Update Month's Income\n
    4. Review Month's Budget\n
    5. Review all saved Budgets\n
    6. Exit Application`);
  prompt.get(["option"], (err, opt) => {
    switch (opt.option) {
      case "1":
        addBudget();
        break;
      case "2":
        prompt.get(["month"], (err, budget) => {
          MonthlyBudget.find({ month: budget.month })
            .then((response) => response.length > 0)
            .then((bool) => {
              if (bool) {
                updateExpences(budget.month);
              }
            });
        });
        break;
      case "3":
        prompt.get(["month"], (err, budget) => {
          MonthlyBudget.find({ month: budget.month })
            .then((response) => response.length > 0)
            .then((bool) => {
              if (bool) {
                updateExpences(budget.month);
              }
            });
        });
        break;
      case "4":
        viewSingleMonth();
        break;
      case "5":
        viewAllMonths();
        break;
      case "6":
        console.clear();
        process.exit();
      default:
        console.clear();
        console.log("ERROR: Invalid Input. Returning To Menu");
        setTimeout(() => {
          console.clear();
          Menu();
        }, 3000);
    }
  });
}

Menu();
