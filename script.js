//挨拶アプリ
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

//TODOアプリ
const todoInput =
  document.getElementById("todoInput");
const addTodoButton =
  document.getElementById("addTodoButton");
const todoList =
  document.getElementById("todoList");

// localStorageから取得
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 表示関数
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    F
    const li =
      document.createElement("li");
    li.textContent = todo;

    // 削除ボタン
    const deleteButton =
      document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => {

      todos.splice(index, 1);

      saveTodos();

      renderTodos();

    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);

  });

}

// 保存関数
function saveTodos() {

  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  );

}


// 追加イベント
addTodoButton.addEventListener("click", () => {

  const task = todoInput.value;

  if (task === "") {
    return;
  }

  todos.push(task);

  saveTodos();

  renderTodos();

  todoInput.value = "";

});


// 初期表示
renderTodos();