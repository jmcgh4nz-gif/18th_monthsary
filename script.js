const button = document.getElementById("openMessage");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.scrollIntoView({ behavior: "smooth" });
  button.textContent = "♡ opened ♡";
  button.disabled = true;
});

const loveButton = document.getElementById("loveButton");
const dinosaur = document.getElementById("dinosaur");

loveButton.addEventListener("click", () => {
  dinosaur.classList.remove("hidden");
  loveButton.textContent = "hehe, i knew it ♡";
  loveButton.disabled = true;
  dinosaur.scrollIntoView({ behavior: "smooth", block: "center" });
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.2 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 22) + "px";
  heart.style.animationDuration = (3 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 350);
