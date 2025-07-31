// Элементүүдийг олж авна
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

// Ярилцъя товч → чат нээх
chatToggle.addEventListener("click", () => {
  chatContainer.classList.remove("hidden");
  chatToggle.style.display = "none";
});

// Хаах товч
closeChat.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
  chatToggle.style.display = "block";
  sidebar.classList.add("hidden");
  guideMenu.classList.add("hidden");
});

// Багасгах товч
minimizeChat.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
  chatToggle.style.display = "block";
  sidebar.classList.add("hidden");
  guideMenu.classList.add("hidden");
});

// ☰ Цэс нээх/хаах
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  guideMenu.classList.add("hidden"); // даралт бүрд submenu хаана
});

// Сэтгэлийн хөтөч дэд цэс toggle
guideToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // доошлох зайлсхийх
  guideMenu.classList.toggle("hidden");
});

// Мессежийг чат руу нэмэх
function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = sender + ": " + text;
  messageDiv.className = "message " + sender;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// ChatGPT хариу (түр загвар)
function getBotResponse(userText) {
  if (userText.includes("сайн")) return "Сайн уу! Та өнөөдөр ямар мэдрэмжтэй байна?";
  if (userText.includes("уучлаарай")) return "Зүгээр ээ, тайван байгаарай.";
  return "Би ойлголоо. Та үргэлжлүүлэн ярьж болно.";
}

// Илгээх товч дарахад
sendButton.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text) {
    appendMessage("Та", text);
    const response = getBotResponse(text);
    setTimeout(() => {
      appendMessage("Oyunsanaa", response);
    }, 500);
    userInput.value = "";

    // Хариу илгээхэд цэсүүд хаагдана
    sidebar.classList.add("hidden");
    guideMenu.classList.add("hidden");
  }
});

// Enter дарж илгээх
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});

// Фокус ороход submenu хураагдах
userInput.addEventListener("focus", () => {
  guideMenu.classList.add("hidden");
});
