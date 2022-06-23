class User {
  constructor(username, password, permission) {
    this.username = username;
    this.password = password;
    this.permission= permission;
    this.users = [];
  }

  register() {
    this.users.push({
      username: this.username,
      password: this.password,
      permission: this.permission,
    });
  }

  getUsers() {
    return this.users;
  }
}

class Guest extends User {
  constructor(username, password, permission) {
    super(username, password);
    this.permission = permission;
  }

  register() {
    this.users.push({
      username: this.username,
      password: this.password,
      permission: this.permission,
    });
  }

  getUsers() {
    return this.users;
  }
}

class Admin extends User {
  constructor(username, password, permission) {
    super(username, password);
    this.permission = permission;
  }

  register() {
    this.users.push({
      username: this.username,
      password: this.password,
      permission: this.permission,
    });
  }

  getUsers() {
    return this.users;
  }
}

let app = new Admin(`John`, "12345", "Administrator");
app.register();
console.log(app.getUsers());
let app2 = new Guest("Bob", "123456", "Guest");
app2.register();
console.log(app2.getUsers());
let app3= new User("Joe", "54321", "User");
app3.register();
console.log(app3.getUsers());