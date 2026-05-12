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

addTodoButton.addEventListener("click", () => {

  const task = todoInput.value;

  if (task === "") {
    return;
  }

  const li =
    document.createElement("li");

  li.textContent = task;

  // 削除ボタン作成
  const deleteButton =
    document.createElement("button");

  deleteButton.textContent = "削除";

  // 削除イベント
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  // liへ追加
  li.appendChild(deleteButton);

  // ulへ追加
  todoList.appendChild(li);

  // 入力欄クリア
  todoInput.value = "";

});