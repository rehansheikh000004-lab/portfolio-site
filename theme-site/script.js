const btn = document.getElementById("toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

btn.onclick = () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  localStorage.setItem("theme", theme);
};
