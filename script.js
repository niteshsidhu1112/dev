const noText = document.getElementById("noText");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const container = document.querySelector(".options");

function dodgeNo() {
  const maxX = container.clientWidth - noText.offsetWidth;
  const maxY = container.clientHeight - noText.offsetHeight;

  // Get bounding box of "Yes" button relative to container
  const yesRect = yesBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // Calculate Yes button position inside container coords
  const yesLeft = yesRect.left - containerRect.left;
  const yesRight = yesLeft + yesRect.width;
  const yesTop = yesRect.top - containerRect.top;
  const yesBottom = yesTop + yesRect.height;

  let x, y;

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  function isOverlapping(nx, ny) {
    // Check if the new No position overlaps Yes button area with some padding (10px)
    const padding = 10;
    return !(
      nx + noText.offsetWidth + padding < yesLeft || // No right edge left of Yes left edge
      nx > yesRight + padding ||                     // No left edge right of Yes right edge
      ny + noText.offsetHeight + padding < yesTop ||// No bottom above Yes top
      ny > yesBottom + padding                       // No top below Yes bottom
    );
  }

  // Try random positions until no overlap with Yes button
  do {
    if (isMobile) {
      x = Math.random() * maxX;
      y = 10; // fixed vertical position on mobile
    } else {
      x = Math.random() * maxX;
      y = Math.random() * maxY;
    }
  } while (isOverlapping(x, y));

  noText.style.left = `${x}px`;
  noText.style.top = `${y}px`;
}


noText.addEventListener("mouseenter", dodgeNo);
noText.addEventListener("touchstart", dodgeNo);

yesBtn.addEventListener("click", () => {
  message.innerHTML = "YAYYYY!! 💖🎉";
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


