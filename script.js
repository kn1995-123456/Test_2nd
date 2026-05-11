const button = document.getElementById("changeButton");

const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "ボタンが押されました！";

  message.style.color = "red";
});