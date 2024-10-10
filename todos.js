const addTodoBtn = document.getElementById("add-btn");
const toDoInput = document.getElementById("new-todo-input");
const todoListElement = document.getElementById("todo-list");

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

function createTodo(text) {
  todoList.push(new Todo(text));
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

function cleanInput() {
  toDoInput.value = "";
}

function render() {
  todoListElement.innerHTML = "";
  todoList.forEach((todo, index) => {
    const liEle =
      todo.status === Status.OPEN
        ? createLiElement(index, todo.text)
        : todo.status === Status.EDITING
        ? createEditingLiElement(index, todo.text)
        : null;
    todoListElement.appendChild(liEle);
  });
}

function createEditingLiElement(id, text) {
  const element = document.createElement("li");
  element.id = id;

  const inputElement = document.createElement("input");
  inputElement.value = text;

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", (event) => {
    todoList[id].status = Status.OPEN;
    todoList[id].text = inputElement.value;
    render();
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", (event) => {
    todoList[id].status = Status.OPEN;
    render();
  });

  element.append(inputElement);
  element.appendChild(saveButton);
  element.appendChild(cancelButton);
  return element;
}

function createLiElement(id, text) {
  const element = document.createElement("li");
  element.id = id;
  element.textContent = text;
  element.addEventListener("click", (event) => {
    todoList[+event.target.id].status = Status.EDITING;
    render();
  });
  return element;
}

addTodoBtn.addEventListener("click", () => {
  createTodo(toDoInput.value);
  cleanInput();
  render();
});

toDoInput.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
      createTodo(toDoInput.value);
      cleanInput();
      render();
      break;
    default:
      break;
  }
});
