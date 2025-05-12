// Button click
document.getElementById("clickMe").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Hover effect
const hoverDiv = document.getElementById("hoverMe");
hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.backgroundColor = "lightgreen";
});
hoverDiv.addEventListener("mouseout", () => {
  hoverDiv.style.backgroundColor = "lightgray";
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Double-click secret
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("You found the secret double-click!");
});

// Change color
document.getElementById("colorChanger").addEventListener("click", () => {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// Image gallery
const galleryImages = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150/ff0000",
  "https://via.placeholder.com/150/00ff00"
];
let imgIndex = 0;
document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % galleryImages.length;
  document.getElementById("galleryImg").src = galleryImages[imgIndex];
});

// Tabs
document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(tc => tc.style.display = "none");
    document.getElementById(`tab${btn.dataset.tab}`).style.display = "block";
  });
});

// Form validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  if (!email.includes("@")) {
    feedback.textContent = "Invalid email format!";
    feedback.style.color = "red";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  }
});
