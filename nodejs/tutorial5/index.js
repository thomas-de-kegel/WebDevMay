const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test", (err) => {
    if (err) {
      console.log("error during connection to db");
    } else {
      console.log("connected to db");
    }
  });
}
const users = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: String,
  age: Number,
  isAdmin: Boolean,
});

const Users = mongoose.model("Users", users);

const user1 = {
  username: "Root",
  password: "12345",
  age: 18,
  isAdmin: true,
};
const _user1 = new Users(user1);

_user1.save().then((res) => {
  console.log(res, "saved!");
});

//Users has to be written with capital letter
Users.find({}).then((res) => {
  console.log(res);
})
.then(user => {
    if(user != null){
        console.log("username is already taken")
    }else{
        console.log("username is available")

        new Users({
            username: 'Root',
            password: '1234567',
            age: 30,
            isAdmin: true
        }).save().then(newUser => {console.log(newUser)})
    }
})

//find a record by its id and delete it
// Users.findByIdAndDelete('63285e8bf319293932eca4d9')
// .then(res=> {
//     console.log(res)
// })
