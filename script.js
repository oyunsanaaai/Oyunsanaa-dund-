document.getElementById("chat-toggle").addEventListener("click", function () {
  document.getElementById("chat-container").classList.remove("hidden");
});

document.getElementById("close-chat").addEventListener("click", function () {
  document.getElementById("chat-container").classList.add("hidden");
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("hidden");
});
