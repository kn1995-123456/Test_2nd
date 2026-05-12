const greetButton =
  document.getElementById("greetButton");

const nameInput =
  document.getElementById("nameInput");

const greetingMessage =
  document.getElementById("greetingMessage");

greetButton.addEventListener("click", () => {

  const name = nameInput.value;

  greetingMessage.textContent =
    `こんにちは ${name}さん`;

});

const todoInput =
  document.getElementById("todoInput");

const addTodoButton =
  document.getElementById("addTodoButton");

const todoList =
  document.getElementById("todoList");

addTodoButton.addEventListener("click", () => {

  const task = todoInput.value;

  if (task === "") {
    return;
  }

  const li =
    document.createElement("li");

  li.textContent = task;

  todoList.appendChild(li);

  todoInput.value = "";

});