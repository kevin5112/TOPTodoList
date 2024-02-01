import Todo from './Todo';

export default class TodoList {
  constructor(todoList = []) {
    this.todoList = todoList;
  }

  todoListSize() {
    return this.todoList.length;
  }

  addTodo(title) {
    this.todoList.push(new Todo(title));
  }

  getTodoList() {
    return this.todoList;
  }

  printTodoList() {
    this.todoList.forEach((todo) => console.log(todo));
  }
}
