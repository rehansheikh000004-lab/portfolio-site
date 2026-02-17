const words = ["Faster", "Beautiful", "Modern"];
const el = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    el.textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1200);
  }
}

function erase() {
  if (charIndex > 0) {
    el.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  }
}

type();
