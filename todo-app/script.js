const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    li.onclick = () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    };

    list.appendChild(li);
  });
}

addBtn.onclick = () => {
  if (input.value === "") return;

  todos.push(input.value);
  saveTodos();
  renderTodos();
  input.value = "";
};

renderTodos();
