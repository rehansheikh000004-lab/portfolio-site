const card = document.querySelector(".glass-card");

let pos = 0;

setInterval(() => {
  pos += 0.5;
  card.style.transform = `translateY(${Math.sin(pos) * 10}px)`;
}, 30);
