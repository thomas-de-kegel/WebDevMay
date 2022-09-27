fetch('http://localhost:8080/todos')
.then(response => response.json())
then(data=>{
    console.log(data);
})