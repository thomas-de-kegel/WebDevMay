//npm i prompt //for handling user input
//https://www.npmjs.com/package/prompt for docs
// !!! RUN WITH NODE, NOT NODEMON!!!
const mongoose = require("mongoose");
const prompt = require("prompt");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/customers", (err) =>
    console.log("connected to db")
  );

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// 1. create a schema
const customerSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  address: String,
  website: String,
});

// 2. compile schema to model
const Customer = mongoose.model("Customer", customerSchema);

// email validation
function validateEmail(email) {
  let domains = ["gmail.com", "hotmail.com"];
  let foundEmail = domains.filter((domain) => domain === email.split("@")[1]);
  console.log(foundEmail);

  if (foundEmail.length > 0) {
    return true;
  } else {
    return false;
  }
}

//user validation
function doesCustomerExist(fullname) {
  return Customer.exists({
    fullname: fullname,
  }).then((res) => res);
}

prompt.start();

function AddCustomer(){
    prompt.get(['fullname','email'],(err,customer)=>{
        console.log(customer)
        Menu()
    })
}

//get properties for prompt from Customer object

function Menu() {
  console.log(`
    1. Add Customer\n
    2. Update Customer\n
    3. Delete Customer\n
    4. Get All Customers\n
    5. Exit`);
  prompt.get(["option"], (err, opt) => {
    switch (opt.option) {
      case "1":
        //console.log("add customer");
        AddCustomer();
        break;
      case "2":
        console.log("update customer");
        Menu();
        break;
      case "3":
        console.log("delete customer");
        Menu();
        break;
      case "4":
        console.log("get all customers");
        Menu();
        break;
      case "5":
        console.log("exit");
        process.exit();
    default:
        console.log('INVALID OPTION');
        Menu();
    }
  });
}

Menu();
