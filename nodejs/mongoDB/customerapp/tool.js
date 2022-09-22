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

function clean(obj) {
  for (var propName in obj) {
    if (obj[propName] === "" || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj;
}

const customerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    lowercase: true,
  },
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

function AddCustomer() {
  prompt.get(
    ["fullname", "email", "phone", "address", "website"],
    (err, customer) => {
      //console.log(customer)
      // create obj from model
      const customerObj = new Customer(customer);
      doesCustomerExist(customer.fullname)
        .then((fullname) => {
          fullname === null
            ? validateEmail(customer.email)
              ? customerObj.save().then((data) => console.log("Customer saved"))
              : console.log("Invalid Email")
            : console.log("Name is not available");
          //clear console after 2 seconds
        })
        .finally(() =>
          setTimeout(() => {
            console.clear();
            Menu();
          }, 2000)
        );
    }
  );
}

function UpdateCustomer(customerFullname) {
  prompt.get(
    ["fullname", "email", "phone", "address", "website"],
    (err, customer) => {
      Customer.updateOne(
        { fullname: customerFullname },
        {$set:clean(customer)})
        .then(response=>console.log(response))
        .finally(() => {
          console.log("Press 'x' to return to the menu")
          prompt.get(['return'], (err, answer) => {
            if(answer.return === 'x') {
              console.clear()
              Menu()
            }
          })
        })
        
      
      //    console.log(clean(customer))
    }
  );
}

function GetAllCustomers() {
  Customer.find({})
    .then((data) => {
      data.forEach((customer) => {
        console.table({
          fullname: customer.fullname,
          email: customer.email,
          phone: customer.phone,
          address: customer.address,
          website: customer.website,
        });
      });
    })
    .finally(() => {
      console.log("Press 'x' to return to the menu");
      prompt.get(["return"], (err, answer) => {
        if (answer.return === "x") {
          Menu();
        }
      });
    });
}

function DeleteCustomer() {
  prompt.get(["fullname"], (err, customer) => {
    doesCustomerExist(customer.fullname)
      .then((fullname) => {
        fullname !== null
          ? Customer.findOneAndDelete({
              fullname: customer.fullname,
            }).then(() => console.log(`${customer.fullname} is deleted.`))
          : console.log("Customer not found");
      })
      .finally(() =>
        setTimeout(() => {
          console.clear();
          Menu();
        }, 3000)
      );
  });
}

//get properties for prompt from Customer object

function Menu() {
  console.log(`
    ||CustomerDB V.0.0.1||
    █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
    █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
    █░░║║║╠─║─║─║║║║║╠─░░█
    █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
    █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
    `);
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
        prompt.get(["fullname"], (err, customer) => {
          Customer.find({ fullname: customer.fullname })
            .then((response) => response.length > 0)
            .then((bool) => {
              if (bool) {
                UpdateCustomer(customer.fullname);
              }
            });

          //   UpdateCustomer()
        });
        break;
      case "3":
        DeleteCustomer();
        break;
      case "4":
        GetAllCustomers();
        break;
      case "5":
        console.log("exit");
        process.exit();
      default:
        console.log("INVALID OPTION");
        Menu();
    }
  });
}

Menu();
