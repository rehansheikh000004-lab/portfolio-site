const btn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

/* MENU */
btn.onclick = () => {
  nav.style.display =
    nav.style.display === "flex" ? "none" : "flex";
};

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal, .reveal-strong");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
});
