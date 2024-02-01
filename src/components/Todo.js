export default class Todo {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }
  toggleCompleted() {
    this.completed = !this.completed;
  }

  getCompleted() {
    return this.completed;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }
}
