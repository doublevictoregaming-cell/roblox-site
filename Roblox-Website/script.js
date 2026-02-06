/* Loader */
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* Typing Effect */
const text = "Gaming • Lua • Tech • Roblox Creation";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

/* Counters */
document.querySelectorAll(".counter").forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const value = +counter.innerText;
    const inc = target / 100;

    if (value < target) {
      counter.innerText = Math.ceil(value + inc);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

/* Mobile Menu */
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

/* Theme Toggle */
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

/* Sound */
function playSound() {
  document.getElementById("clickSound").play();
}

/* Particles */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#00ffcc";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();
