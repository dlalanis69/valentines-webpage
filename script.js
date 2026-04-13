// DOM element references for the YES and NO buttons
let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");

// Track the current scale of each button (starts at normal size)
let noSize = 1;
let yesSize = 1;

// Go to question screen — hides the intro and shows the question
function goToQuestion() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("question").classList.remove("hidden");
}

// When NO is pressed
function sayNo() {

  // Make the NO button smaller (shrinks each time it's clicked)
  noSize -= 0.2;
  noBtn.style.transform = `scale(${noSize})`;

  // Make the YES button bigger (grows each time NO is clicked)
  yesSize += 1;
  yesBtn.style.transform = `scale(${yesSize})`;

  // Move NO button to a random position so it's hard to click
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// When YES is pressed — show the final screen and start animations
function sayYes() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");

  // Start both the floating hearts and stars animations
  startHearts();
  startStar();
}

// Continuously spawns floating heart emojis on the screen
function startHearts() {
  const container = document.getElementById("hearts-container");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💗";

    // Random horizontal position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    container.appendChild(heart);

    // Remove the heart from the DOM after the animation ends
    setTimeout(() => {
      heart.remove();
    }, 4000);

  }, 300); // Spawn a new heart every 300ms
}

// Continuously spawns floating sparkle emojis on the screen
function startStar() {
  const container = document.getElementById("star-container");

  setInterval(() => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerText = "✨";

    // Random horizontal position and size
    star.style.left = Math.random() * 100 + "vw";
    star.style.fontSize = Math.random() * 20 + 15 + "px";

    container.appendChild(star);

    // Remove the star from the DOM after the animation ends
    setTimeout(() => {
      star.remove();
    }, 4000);
  }, 300); // Spawn a new star every 300ms
}