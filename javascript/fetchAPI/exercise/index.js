import { faker } from '@faker-js/faker' //first install faker js via npm install @faker-js/faker --save-dev
console.clear();

const generateUser = () => {
    let userAndPass = `${faker.internet.userName()}:${faker.internet.password()}`
    let newUser

    newUser = JSON.parse(`{"Username": "${faker.internet.userName}"}`);
    console.log(newUser);
    return userAndPass //this returns a faker generated name and faker generated password in this format: user:password
    
    
}

let i = 0
while (i < 20) {
    console.log(generateUser())

    i++
}
