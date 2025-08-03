document.getElementById('chat-toggle').onclick = () => {
  document.getElementById('chat-container').classList.remove('hidden');
};

document.getElementById('close-chat').onclick = () => {
  document.getElementById('chat-container').classList.add('hidden');
};

document.getElementById('minimize-chat').onclick = () => {
  document.getElementById('chatbox').classList.toggle('hidden');
};

document.getElementById('menu-toggle').onclick = () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
};

// Автоматаар мэню хаах
document.getElementById('userInput').addEventListener('focus', () => {
  document.getElementById('sidebar').classList.add('hidden');
});

// Илгээх товч
document.getElementById('sendBtn').onclick = sendMessage;

// Enter дарвал
document.getElementById('userInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Чат бичих логик
function sendMessage() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;

  const chatbox = document.getElementById('chatbox');

  // Хэрэглэгчийн бичлэг
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user-message';
  userMsg.textContent = text;
  chatbox.appendChild(userMsg);

  // Оюунсанаагийн хариу
  const botMsg = document.createElement('div');
  botMsg.className = 'chat-message bot-message';
  botMsg.textContent = 'Сонирхолтой асуулт байна! Би бодоод хариулъя.';
  chatbox.appendChild(botMsg);

  input.value = '';
  chatbox.scrollTop = chatbox.scrollHeight;
}
