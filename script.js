document.getElementById("chat-toggle").addEventListener("click", () => {
  document.getElementById("chat-container").classList.remove("hidden");
});

document.getElementById("close-chat").addEventListener("click", () => {
  document.getElementById("chat-container").classList.add("hidden");
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("hidden");
});

document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const input = document.getElementById("user-input");
  const msg = input.value.trim();
  if (!msg) return;

  const chatbox = document.getElementById("chatbox");

  const userMsg = document.createElement("div");
  userMsg.textContent = msg;
  userMsg.style.textAlign = "left";
  chatbox.appendChild(userMsg);

  const reply = document.createElement("div");
  reply.textContent = "Оюунсанаа: Танд хариу өгч байна...";
  reply.style.textAlign = "right";
  reply.style.background = "#f7e1d7";
  chatbox.appendChild(reply);

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Scroll control
document.getElementById("scroll-down").addEventListener("click", () => {
  document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
});
document.getElementById("scroll-up").addEventListener("click", () => {
  document.getElementById("chatbox").scrollTop = 0;
});
