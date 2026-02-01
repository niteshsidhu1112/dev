const noText = document.getElementById("noText");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const container = document.querySelector(".options");

function dodgeNo() {
  const maxX = container.clientWidth - noText.offsetWidth;
  const maxY = container.clientHeight - noText.offsetHeight;

  // On mobile, dodge mostly horizontally to avoid weird jumps
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    const x = Math.random() * maxX;
    noText.style.left = `${x}px`;
    noText.style.top = `10px`; // fixed vertical position
  } else {
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noText.style.left = `${x}px`;
    noText.style.top = `${y}px`;
  }
}

noText.addEventListener("mouseenter", dodgeNo);
noText.addEventListener("touchstart", dodgeNo);

yesBtn.addEventListener("click", () => {
  message.innerHTML = "YAYYYY!! 💖🎉 I knew you’d say YES 😘";
  noText.style.display = "none";
  yesBtn.disabled = true;

  startHearts();
});

function startHearts() {
  for (let i = 0; i < 40; i++) {
    setTimeout(createHeart, i * 100);
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 20 + Math.random() * 20 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}
