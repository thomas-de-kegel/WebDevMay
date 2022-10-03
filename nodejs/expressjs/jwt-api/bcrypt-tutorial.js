//test and learn bcryptjs module
const bcrypt = require('bcryptjs');
const user_password = "abc123"

// hashing plaintext password
// second number is the salt, a random string that makes the password string more unpredictable
bcrypt.hash(user_password, 10)
.then(result=>{
    console.log(`before: ${user_password}\nafter: ${result}`)
})

const passSentByFrontEnd = "123123"

//check if the hashed password and the plaintext password are the same.
//returns false since the hashed password is user_password.
bcrypt.compare(passSentByFrontEnd, '$2a$10$.pgPQ33oydAdInXILUAuXOzQAbnC9Vy1LWcIMXefoa7xRX5V4wud2')
.then(result=>{
    console.log(result)
})