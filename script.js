const chatbotButtons = document.getElementById("chatbot-buttons");

const chatbots = {
  premium: [
    "Оюунсанаа – ⭐ 0–7 нас (чат)",
    "Оюунсанаа – ⭐ 8–12 нас (чат)",
    "Оюунсанаа – ⭐ 13–18 нас (чат)",
    "Оюунсанаа – ⭐ 19–25 нас (чат)",
    "Оюунсанаа – ⭐ 26–40 нас (чат)",
    "Оюунсанаа – ⭐ 41–55 нас (чат)",
    "Оюунсанаа – ⭐ 56–70 нас (чат)",
    "Оюунсанаа – ⭐ 70+ нас (чат)",
    "Оюунсанаа – ⭐ Тусгай (чат)",
    "Оюунсанаа – ⭐ Багц (чат)",
  ],
  standard: [
    "Оюунсанаа – Бага нас 0–7 (чат)",
    "Оюунсанаа – Балчир нас 8–12 (чат)",
    "Оюунсанаа – Өсвөр нас 13–18 (чат)",
    "Оюунсанаа – Залуу нас 19–25 (чат)",
    "Оюунсанаа – Дунд нас 26–40 (чат)",
    "Оюунсанаа – Ахимаг нас 41–55 (чат)",
    "Оюунсанаа – Ахмад нас 56–70 (чат)",
    "Оюунсанаа – Нас өндөр 70+ (чат)",
  ],
  package: [
    "Оюунсанаа – Гэр бүл (чат)",
    "Оюунсанаа – Ажил мэргэжлийн (чат)",
    "Оюунсанаа – Спорт, урлагийн (чат)",
    "Оюунсанаа – Анги хамт олон (чат)",
    "Оюунсанаа – Байгууллага (чат)",
  ],
  blind: [
    "Оюунсанаа – Хараагүйчүүд (чат)",
  ],
  special: [
    "Оюунсанаа – Тусгай хэрэгцээт (чат)",
  ]
};

function showGroup(group) {
  chatbotButtons.innerHTML = "";
  const list = chatbots[group];
  list.forEach((label, index) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    if (group === "standard") btn.className = `standard-${index}`;
    else if (group === "package") btn.className = `package-${index}`;
    else btn.className = group;
    chatbotButtons.appendChild(btn);
  });
}
