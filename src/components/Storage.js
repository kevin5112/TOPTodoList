import Todo from './Todo';
import TodoList from './TodoList';

export default class Storage {
  loadMockStorage() {
    let tempTodo = new Todo('walk dog');
    let tempTodo2 = new Todo('make lunch');
    let newTodoList = new TodoList([tempTodo, tempTodo2]);
    this.todos = newTodoList;
  }

  static loadStorage() {
    let todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem('todoList'))
    );
    return todoList;
  }

  static saveStorage(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  getStorageTodoList() {
    return this.todoList;
  }

  getStorageTodo(title) {
    return this.todoList.filter((todo) => todo.title === title);
  }

  removeStorageTodo(title) {
    this.todoList = this.todoList.filter((todo) => todo.title !== title);
    this.saveStorage();
  }

  addTodoList(todoList) {
    this.todoList = todoList;
  }
}
