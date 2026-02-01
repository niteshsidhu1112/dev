const noText = document.getElementById("noText");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

noText.addEventListener("mouseenter", () => {
  const container = document.querySelector(".options");

  const maxX = container.offsetWidth - noText.offsetWidth;
  const maxY = container.offsetHeight - noText.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noText.style.left = randomX + "px";
  noText.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yayyyy!! 💘🎉 You just made me the happiest person! 💖";
  yesBtn.disabled = true;
  noText.style.display = "none";
});
