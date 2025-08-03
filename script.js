const chatToggle = document.getElementById("chatToggle");
const chatContainer = document.getElementById("chatContainer");
const closeChat = document.getElementById("closeChat");
const minimizeChat = document.getElementById("minimizeChat");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const guideToggle = document.getElementById("guideToggle");
const guideMenu = document.getElementById("guideMenu");
const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("userInput");
const chatbox = document.getElementById("chatbox");

// Chat нээх
chatToggle.addEventListener("click", () => {
  chatContainer.classList.remove("hidden");
  chatToggle.style.display = "none";
});

// Хаах
closeChat.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
  chatToggle.style.display = "block";
  sidebar.classList.add("hidden");
  guideMenu.classList.add("hidden");
});

// Багасгах
minimizeChat.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
  chatToggle.style.display = "block";
  sidebar.classList.add("hidden");
  guideMenu.classList.add("hidden");
});

// ☰ цэс
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  guideMenu.classList.add("hidden");
});

// submenu toggle
guideToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  guideMenu.classList.toggle("hidden");
});

// Мессеж нэмэх
function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = sender + ": " + text;
  messageDiv.className = "message " + sender;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Bot хариу
function getBotResponse(userText) {
  if (userText.includes("сайн")) return "Сайн уу! Танд юугаар туслах вэ?";
  if (userText.includes("уучлаарай")) return "Зүгээр ээ, амьсгалаад үргэлжлүүлээрэй.";
  return "Би ойлголоо. Та үргэлжлүүлэн бичиж болно.";
}

// Илгээх товч
sendButton.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text) {
    appendMessage("Та", text);
    const response = getBotResponse(text);
    setTimeout(() => {
      appendMessage("Oyunsanaa", response);
    }, 500);
    userInput.value = "";
    sidebar.classList.add("hidden");
    guideMenu.classList.add("hidden");
  }
});

// Enter дарахад
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});

// Текст дээр фокус авахад submenu хаах
userInput.addEventListener("focus", () => {
  guideMenu.classList.add("hidden");
});
