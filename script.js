
document.getElementById("chat-toggle").onclick = function() {
  document.getElementById("chat-container").classList.toggle("hidden");
};
document.getElementById("menu-toggle").onclick = function() {
  document.getElementById("sidebar").classList.toggle("hidden");
};
document.getElementById("chat-form").onsubmit = function(e) {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message !== "") {
    const box = document.getElementById("chatbox");
    const msg = document.createElement("div");
    msg.textContent = "👤 " + message;
    box.appendChild(msg);
    input.value = "";
    box.scrollTop = box.scrollHeight;
  }
};
