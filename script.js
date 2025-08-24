// ===== Part 1: Animate Box on Button Click =====
const animateBtn = document.getElementById("animateBtn");
const animatedBox = document.getElementById("animatedBox");

animateBtn.addEventListener("click", () => {
  animatedBox.style.transform = "translateX(200px) rotate(45deg)";
  animatedBox.style.backgroundColor = "#8e44ad";

  // Reset after 1s
  setTimeout(() => {
    animatedBox.style.transform = "translateX(0) rotate(0)";
    animatedBox.style.backgroundColor = "#ff5733";
  }, 1000);
});

// ===== Part 2: Function Demo - Random Color Generator =====
const colorBtn = document.getElementById("colorBtn");
const colorBox = document.getElementById("colorBox");

// Function to generate random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to apply random color
function applyRandomColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  return color;
}

colorBtn.addEventListener("click", () => {
  const newColor = applyRandomColor(colorBox);
  console.log("New color applied:", newColor);
});

// ===== Part 3: Flip Card =====
const flipCardInner = document.querySelector("#flipCard .flip-card-inner");

flipCardInner.addEventListener("click", () => {
  flipCardInner.classList.toggle("flipped");
});
