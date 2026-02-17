const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

addBtn.onclick = () => {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.onclick = () => li.remove();

  list.appendChild(li);
  input.value = "";
};
