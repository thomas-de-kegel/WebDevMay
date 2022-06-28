//fetch and filter

async function GetData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
}

let users = [];

//first method
/*
GetData()
  .then((data) => {
    console.log(data);
    data.map((user) => {
      const obj = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      };
      console.log(obj);
      users.push(obj);
    });
    return users;
  })
  .then((data) => {
    console.log(data);
  });
//*/

//second method
//*
GetData()
.then(data=>{
    return data.map(({id,name,username,email})=>({id,name,username,email}))
})
.then(data=>{
    console.log(data)
})


// const TestData = ['a','b','c','d','e']
// const [x,y,z,d,e,f,g] = TestData
// console.log(x,y,z,g) 

const obj={
    id:1,
    name:'atilla',
    username:'root',
}

const {id,name,username} = obj
console.log(username)
//*/