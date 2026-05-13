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
// 初期表示
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

renderTodos();

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




//ダークモード
// 保存状態確認
const darkMode = localStorage.getItem("darkMode");

// ONならclass追加
if (darkMode === "true") {
  document.body.classList.add("dark-mode");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // 現在状態取得
  const isDarkMode = document.body.classList.contains("dark-mode");
  // 保存
  localStorage.setItem(
    "darkMode",
    isDarkMode
  );
});

//GitHub情報取得
const githubInput =
  document.getElementById("githubInput");

const githubButton =
  document.getElementById("githubButton");

const githubResult =
  document.getElementById("githubResult");


// GitHub取得処理
async function fetchGithubUser() {

  const username =
    githubInput.value;

  if (username === "") {
    return;
  }

  githubResult.innerHTML =
    "<p>Loading...</p>";

  try {

    const response = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (!response.ok) {

      throw new Error(
        "ユーザーが見つかりません"
      );

    }

    const data =
      await response.json();

    githubResult.innerHTML = `
      <h3>${data.login}</h3>

      <img
        src="${data.avatar_url}"
        width="100"
      >

      <p>
        Followers:
        ${data.followers}
      </p>

      <p>
        Public Repos:
        ${data.public_repos}
      </p>
    `;

  } catch (error) {

    githubResult.innerHTML = `
      <p>${error.message}</p>
    `;

  }

}


// ボタンクリック
githubButton.addEventListener(
  "click",
  fetchGithubUser
);


// Enterキー
githubInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {

      fetchGithubUser();

    }

  }
);

const tabButtons =
  document.querySelectorAll(".tab-button");

const tabContents =
  document.querySelectorAll(".tab-content");


tabButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // active削除
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });


    // button active
    button.classList.add("active");

    // 対象tab取得
    const tabId =
      button.dataset.tab;


    // content active
    document
      .getElementById(tabId)
      .classList.add("active");

  });

});

const apiButton =
  document.getElementById("apiButton");

const apiMessage =
  document.getElementById("apiMessage");


apiButton.addEventListener(
  "click",
  async () => {

    const response = await fetch(
      "http://localhost:3000/api/message"
    );

    const data =
      await response.json();

    apiMessage.textContent =
      data.message;

  }
);