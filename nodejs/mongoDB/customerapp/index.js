// getting-started.js
const mongoose = require("mongoose");

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

// 3. customer-1 user object
// const customerObj = {
//   fullname: "John Smith",
//   email: "john@gmail.com",
//   phone: "1234567",
//   adress: "123 sesame Street",
//   website: "http://example.com",
// };

// email validation
function validateEmail(email) {
  let domains = ["gmail.com", "hotmail.com"];
  let foundEmail = domains.filter((domain) => domain === email.split("@")[1]);
  console.log(foundEmail);
  
  if (foundEmail.length > 0) {
    return true
  } else {
    return false;
  }
}

//user validation
function doesCustomerExist(fullname){
    return Customer.exists({
        fullname: fullname
    })
    .then(res=>res)
}

// const customer1 = new Customer(customerObj);
// add data // if the user already exists, nothing happens. If not, we create a new user after testing the email and save it to the database
// doesCustomerExist(customer1.fullname)
// .then(res=>{
//     if(res!==null){
//         console.log('customer already exists')
//     }else{
//         if (validateEmail(customer1.email)) {
//             //save to db
//             customer1.save().then((data) => {
//               console.log(data, "saved");
//             });
//           } else {
//             console.log("please enter a valid email address");
//           }
//     }
// })

//update data
// Customer.findByIdAndUpdate('632ad4945e58717a0c2aea1b',{
//     phone: '98765432'
// })
// .then(data=>console.log(data, "updated"))

//delete data
// Customer.findByIdAndDelete('632ad4945e58717a0c2aea1b')
// .then(data=>console.log(data, "deleted"))

//find data
// Customer.findById({
//     _id: '632ad4945e58717a0c2aea1b'
// }).then(data=>console.log(data))
