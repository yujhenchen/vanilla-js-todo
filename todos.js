const addTodoBtn = document.getElementById("add-btn");
const toDoInput = document.getElementById("new-todo-input");
const todoListElement = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", () => {
  if (isTodoValid()) {
    addTodo(toDoInput.value);
    clearToDoInput();
  }
});

toDoInput.addEventListener("keyup", () => {
  const isValid = isTodoValid();
  if (isValid) {
    addTodoBtn.disabled = false;
  } else {
    addTodoBtn.disabled = true;
  }
});

toDoInput.addEventListener("keydown", ({ key }) => {
  const isValid = isTodoValid();
  if (key === "Enter" && isValid) {
    addTodo(toDoInput.value);
    clearToDoInput();
  }
});

function isTodoValid() {
  return toDoInput.value.length >= 3;
}

function clearToDoInput() {
  toDoInput.value = "";
  addTodoBtn.disabled = true;
}

function addTodo(text) {
  todoListElement.appendChild(renderReadModeTodo(text));
}

function renderReadModeTodo(text) {
  const todoElement = document.createElement("li");
  todoElement.textContent = text;
  todoElement.addEventListener("click", () => {
    todoListElement.replaceChild(renderEditModeTodo(text), todoElement);
  });

  const doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.addEventListener("click", (event) => {
    event.stopPropagation();
    todoElement.remove();
  });

  todoElement.appendChild(doneButton);
  return todoElement;
}

function renderEditModeTodo(text) {
  const todoElement = document.createElement("li");

  const inputElement = document.createElement("input");
  inputElement.value = text;

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", (event) => {
    todoListElement.replaceChild(
      renderReadModeTodo(inputElement.value),
      todoElement
    );
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", (event) => {
    todoListElement.replaceChild(renderReadModeTodo(text), todoElement);
  });

  todoElement.appendChild(inputElement);
  todoElement.appendChild(saveButton);
  todoElement.appendChild(cancelButton);
  return todoElement;
}
