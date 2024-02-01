import Storage from './Storage';
import Todo from './Todo';
import TodoList from './TodoList';

export default function initUI() {
  console.log('hello from ui');
  initUIActions();
  loadTodoListFromStorage();
}

function initUIActions() {
  // init button actions
  let addTodoBtn = document.getElementById('addTodoBtn');

  // init input actions
  let addTodoInput = document.getElementById('addTodoInput');

  addTodoInput.addEventListener('keydown', checkKey);
  addTodoBtn.addEventListener('click', swapTodoForm);
}

function checkKey(event) {
  if (event.key === 'Enter') {
    // TODO: add input to todo list
    swapTodoForm();
    this.value = '';
  }
}

function swapTodoForm() {
  let addTodoInput = document.getElementById('addTodoInput');
  let addTodoBtn = document.getElementById('addTodoBtn');

  addTodoBtn.classList.toggle('hidden');
  addTodoInput.classList.toggle('hidden');
}

// interacting with Storage class
function loadTodoListFromStorage() {
  createMockTodoListFromStorage();
  let todoList = Storage.loadStorage();
  console.log(typeof todoList);
  todoList.printTodoList();
}

function createMockTodoListFromStorage(storage) {
  let newTodo1 = new Todo('make lunch');
  let newTodo2 = new Todo('walk dog');
  Storage.saveStorage([newTodo1, newTodo2]);
}
