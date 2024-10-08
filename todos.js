const todoList = [];

const Status = Object.freeze({
  OPEN: "OPEN",
  EDITING: "EDITING",
  DONE: "DONE",
});

class Todo {
  #key;
  #status;
  #text;
  constructor(text) {
    this.#key = Date.now();
    this.#status = Status.OPEN;
    this.#text = text;
  }

  get key() {
    return this.#key;
  }

  get status() {
    return this.#status;
  }
  set status(val) {
    this.#status = val;
  }

  get text() {
    return this.#text;
  }

  set text(val) {
    this.#text = val;
  }
}

const pendingTodoMap = new Map();

function handleAdd() {
  // call validate
  // if true, add to todoList
  // else show error message
}

function Validate(newTodo) {
  return typeof newTodo === "string" && newTodo.length > 3;
}

function handleEdit() {
  // add <key, todo> into pendingTodoMap, change the status to EDITING
}

function handleCancel() {
  // remove <key, todo> into pendingTodoMap, change the status to OPEN
}

function handleUpdate() {
  // find the to do with the key in todoList, update the text
  // remove <key, todo> into pendingTodoMap, change the status to OPEN
}

function handleComplete() {
  // find the to do with the key in todoList, update the status to DONE
}

function render() {
  // iterate todoList,
  // if todo status is OPEN, render open item
  // if todo status is EDITING, render editing item (find key in pendingTodoMap)
  // else, not render
}

function createLiElement(text) {
  const liElement = document.createElement("li");
  liElement.textContent = text;
  return liElement;
}

const addTodoBtn = document.getElementById("add-btn");
const toDoInput = document.getElementById("new-todo-input");
const todoListElement = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", () => {
  // TODO: remove this test use
  // todoListElement.appendChild(createLiElement("first"));
});

toDoInput.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
      // console.log("press enter");
      break;
    default:
      break;
  }
});
