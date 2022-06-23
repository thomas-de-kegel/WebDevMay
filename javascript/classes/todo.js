//Todo application

class TodoApplication {
  constructor() {
    this.todos = [];
  }

  //addTodo
  addTodo(todo) {
    return this.todos.push(todo); //don't forget the return this. part!!
  }

  //getTodo
  getTodo() {
    return this.todos;
  }

  //getTodoByValue -> single Todo
  getTodoByValue(todo) {
    let single_todo = this.todos.filter(
      (val) => val.toLowerCase().trim == todo.toLowerCase().trim
    );
    console.log(single_todo);
  } //.trim and .toLowerCase makes sure writing errors still work

  //deleteTodoByValue -> delete Todo
  deleteTodoByValue(todo) {
    let index = this.todos.indexOf(todo);
    console.log(this.todos[index]);
    this.todos.splice(index,1);
  }
  //toString -> display by Todos
  toString() {
    this.todos.forEach((todo, index) => {
      console.log(`#${index} Task: ${todo}`);
    });
  }
}

// create a new todo application
let app = new TodoApplication();
console.log(typeof TodoApplication);
app.addTodo("Go to store.");
app.addTodo("Finish my homework.");
app.addTodo("Learn javascript.");

console.log(app.getTodo()); //Don't put app in the brackets of getTodo()
app.toString();
app.getTodoByValue("Finish my homework.");
app.deleteTodoByValue("Finish my homework.");
app.toString();
