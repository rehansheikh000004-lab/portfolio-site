const btn = document.getElementById("send");
const status = document.getElementById("status");

btn.onclick = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields.";
    return;
  }

  status.textContent = "Message sent! (demo)";
};
