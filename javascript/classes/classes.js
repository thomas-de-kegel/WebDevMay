//Javascript classes

/*
function App(username) {
    this.username = username;
}
// */

/*
App.prototype.getUsername = function(){

}
// */

//class based
console.clear;
let username;

class App {
  constructor(username) {
    this.username = username;
    this.users = [];
    this.test = function(){
        return "Function in constructor";
    }
  };

  getUsername(username) {
    return this.username;
  };

  getUsers() {
    return this.users;
  };

  addUser() {
    return this.users.push(this.username);
  };

  toString() {
    return this.getUsername() + " " + App.getCity();

  };

  static getCity() {
    return "Brussels";
  };
};

let app = new App("John");
console.log(typeof App);
//console.log(app.getUsername());
console.log(app.toString());
app.addUser();
console.log(app.getUsers());
//console.log(app.getCity()); //doesn't work
console.log(App.getCity());
console.log(app.test());