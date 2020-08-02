todos = {};

module.exports = class Todos {
  constructor(user) {
    this.username = user;

    if (!todos[this.username]) {
      todos[this.username] = [];
    }
  }

  getAll() {
    return todos[this.username];
  }

  add(text) {
    todos[this.username].push(text);
  }

  remove(index) {
    if (index < todos[this.username].length) {
      todos[this.username].splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  clear() {
    todos[this.username] = [];
  }
}