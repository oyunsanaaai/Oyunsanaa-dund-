document.getElementById("chat-toggle").addEventListener("click", function () {
  document.getElementById("chat-container").classList.toggle("hidden");
});

document.getElementById("close-chat").addEventListener("click", function () {
  document.getElementById("chat-container").classList.add("hidden");
});

document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = text;
  document.getElementById("chatbox").appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.textContent = "Оюунсанаа: Би ойлголоо. Та үргэлжлүүлэн ярьж болно.";
  document.getElementById("chatbox").appendChild(botMsg);

  input.value = "";
  document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
}
