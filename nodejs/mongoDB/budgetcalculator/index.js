// getting-started.js
const mongoose = require("mongoose");
const prompt = require("prompt");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/budget", (err) => {
    console.log("Connected to MongoDB");
  });

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// 1. make a schema 
const budgetSchema = new mongoose.Schema({
    month:{type:String, lowercase:true},
    income:{type:Number, min:0},
    expences:[Number],
    rest:{type: Number,
        default: function(){
            return this.income - this.expences.reduce((a, b) => a + b, 0)
        }}
  });

// 2. compile schema to model
const MonthlyBudget = mongoose.model("budget", budgetSchema);

// 3. montlybudget object
const monthlyBudget = {
    month: "September 2022",
    income: 1800,
    expences: [150,124,4,23],
}

// 4. add data to monthly budget database
const septemberBudget = new MonthlyBudget(monthlyBudget)
septemberBudget.save().then((data) => {
    console.log(data, "saved")
})