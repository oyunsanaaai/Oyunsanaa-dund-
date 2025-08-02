document.addEventListener("DOMContentLoaded", function () {
  const chatToggle = document.getElementById("chatToggle");
  const chatContainer = document.getElementById("chatContainer");
  const closeChat = document.getElementById("closeChat");
  const minimizeChat = document.getElementById("minimizeChat");
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const guideToggle = document.getElementById("guideToggle");
  const guideMenu = document.getElementById("guideMenu");
  const sendButton = document.getElementById("sendButton");
  const userInput = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  chatToggle.addEventListener("click", () => {
    chatContainer.classList.remove("hidden");
    chatToggle.style.display = "none";
  });

  closeChat.addEventListener("click", () => {
    chatContainer.classList.add("hidden");
    chatToggle.style.display = "block";
    sidebar.classList.add("hidden");
    guideMenu.classList.add("hidden");
  });

  minimizeChat.addEventListener("click", () => {
    chatContainer.classList.add("hidden");
    chatToggle.style.display = "block";
    sidebar.classList.add("hidden");
    guideMenu.classList.add("hidden");
  });

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    guideMenu.classList.add("hidden");
  });

  guideToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    guideMenu.classList.toggle("hidden");
  });

  function appendMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = sender + ": " + text;
    messageDiv.className = "message " + sender;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function getBotResponse(userText) {
    if (userText.includes("сайн")) return "Сайн уу! Та тавтай морилно уу.";
    if (userText.includes("уучлаарай")) return "Зүгээрээ! Би ойлголоо. Та үргэлжлүүлэн ярьж болно.";
    return "Би ойлголоо. Та үргэлжлүүлэн ярьж болно.";
  }

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

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendButton.click();
    }
  });

  userInput.addEventListener("focus", () => {
    guideMenu.classList.add("hidden");
  });
});
