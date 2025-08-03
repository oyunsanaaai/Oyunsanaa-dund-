// Элементүүд
const chatToggle = document.getElementById("chatToggle");
const chatContainer = document.getElementById("chatContainer");
const closeChat = document.getElementById("closeChat");
const minimizeChat = document.getElementById("minimizeChat");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("userInput");
const chatbox = document.getElementById("chatbox");

// Нээх
chatToggle.addEventListener("click", () => {
  chatContainer.classList.remove("hidden");
  chatToggle.style.display = "none";
});

// Хаах
closeChat?.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
  chatToggle.style.display = "block";
  sidebar.classList.add("hidden");
});

// Багасгах
minimizeChat?.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
  chatToggle.style.display = "block";
  sidebar.classList.add("hidden");
});

// Цэс нээх
menuToggle?.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

// Илгээх
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
  }
});

// Enter дарж илгээх
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});

// Мессеж нэмэх
function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.textContent = `${sender}: ${text}`;
  msg.className = "message " + sender;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// ChatGPT загвар
function getBotResponse(input) {
  if (input.includes("сайн")) return "Сайн уу! Та өнөөдөр ямар мэдрэмжтэй байна?";
  if (input.includes("уучлаарай")) return "Зүгээр ээ, тайван байгаарай.";
  return "Би сонсож байна. Та үргэлжлүүлээрэй.";
}
