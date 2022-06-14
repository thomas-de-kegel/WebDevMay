//filter

//data
const Filter = document.getElementById("Filter"); //the input field, where the input is pulled from
const FindBtn = document.getElementById("FindBtn"); //the button that triggers the filter
const ResultTitle = document.getElementById("ResultTitle"); //where to return the value
const ResultBody = document.getElementById("ResultBody");
var result;


let posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }]  

function findPostById(id){
    if (posts.filter(value => value.id == id).length !=0){
    return posts.filter(value=> value.id==id)
    } else {
        return [{title: "No post found"}]
    }
};

FindBtn.addEventListener("click" , (e) =>{
    e.preventDefault(); //prevents the page from reloading when the button is clicked
    console.log("Heloooooooooooo", Filter.value);
    let posts = findPostById(Filter.value)[0]; //isolates the object with the correct id value
    console.log(posts.title);
    ResultTitle.innerText = posts.title; //returns the title element of the isolated post
    ResultBody.innerText = posts.body;
})

