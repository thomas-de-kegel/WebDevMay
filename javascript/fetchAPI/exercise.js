//https://jsonplaceholder.typicode.com/users extract and sort user data
//extract id, name, username, email

const users = [];

//step 1: get all original data
let getUsers = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      resolve(data);
    })
    .catch((err) => reject(err));
});
//step 2: extract specific properties from single user

//step 3: users.push();

//step 4: users

//print users in a table
