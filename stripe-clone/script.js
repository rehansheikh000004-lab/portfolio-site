const blob = document.querySelector(".bg-blur");

let x = 0;

setInterval(() => {
  x += 0.5;
  blob.style.transform = `translateX(${Math.sin(x) * 30}px)`;
}, 30);
