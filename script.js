function showMessage() {
  const msg = document.createElement("div");

  msg.textContent = "Thanks for visiting my portofolio,Good bye ⚡";
  msg.style.position = "fixed";
  msg.style.bottom = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "#000";
  msg.style.color = "#00e5ff";
  msg.style.padding = "12px 20px";
  msg.style.border = "1px solid #00e5ff";

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 3000);
}