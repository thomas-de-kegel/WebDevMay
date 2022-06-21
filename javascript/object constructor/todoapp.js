//TodoApplication.js

function TodoApplication(){
    this.todos=[];
}

TodoApplication.prototype.addTodo= function(todo){
    this.todos.push(todo);
}

TodoApplication.prototype.showTasks= function(){
    console.log(this.todos)};

TodoApplication.prototype.deleteTodo= function(value){
    
    let index= this.todos.indexOf(value);
    console.log(index);    
    if(index > -1){
        console.log("Todo found: ", index, this.todos[index])
        this.todos.splice(index,1);
    }
}

let app = new TodoApplication();
//app.showTasks(); //putting showTasks here will print your tasks before you've added them.
app.addTodo("Learn JS");
app.addTodo("Learn React");
app.addTodo("Learn Node");
//app.showTasks(); //Now it works properly.
app.deleteTodo("Learn JS");

app.showTasks();