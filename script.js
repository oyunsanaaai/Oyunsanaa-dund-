const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");
const closeBtn = document.getElementById("close-chat");
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const minimizeBtn = document.getElementById("minimize-chat");
const sendBtn = document.getElementById("send-button");
const input = document.getElementById("user-input");
const chatbox = document.getElementById("chatbox");

// Show chat
chatToggle.addEventListener("click", () => {
  chatContainer.classList.remove("hidden");
});

// Close chat
closeBtn.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
});

// Toggle menu
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

// Minimize chat
minimizeBtn.addEventListener("click", () => {
  chatContainer.style.height = chatContainer.style.height === "60px" ? "600px" : "60px";
});

// Send on Enter
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Send on click
sendBtn.addEventListener("click", sendMessage);

// Hide sidebar if user starts typing
input.addEventListener("input", () => {
  sidebar.classList.add("hidden");
});

// Message logic
function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = text;
  chatbox.appendChild(userMsg);

  input.value = "";

  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.innerText = "Сайн байна уу, танд юугаар туслах вэ?";
  chatbox.appendChild(botMsg);

  chatbox.scrollTop = chatbox.scrollHeight;
}
