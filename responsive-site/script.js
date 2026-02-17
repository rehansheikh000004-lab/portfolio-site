const btn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

btn.onclick = () => {
  nav.style.display =
    nav.style.display === "flex" ? "none" : "flex";
};
