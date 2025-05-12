// Button click event
document.getElementById("clickMe").addEventListener("click", () => {
  alert("Hello! The button was clicked!");
});

// Hover effect with better interaction
const hoverDiv = document.getElementById("hoverMe");
hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.backgroundColor = "lightgreen";
  hoverDiv.textContent = "You're hovering!";
});
hoverDiv.addEventListener("mouseout", () => {
  hoverDiv.style.backgroundColor = "lightgray";
  hoverDiv.textContent = "Hover over me!";
});

// Keypress detection with character count
const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
  keyInput.setAttribute('data-lastkey', e.key);
});
keyInput.addEventListener('input', () => {
  console.log(`Current input length: ${keyInput.value.length}`);
});

// Double-click secret with more interactivity
const secretBtn = document.getElementById("secretBtn");
let clickCount = 0;
secretBtn.addEventListener("dblclick", () => {
  clickCount++;
  alert(`You found the secret double-click! (Discovered ${clickCount} times)`);
  secretBtn.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
});

// Advanced color changer with color display
const colorChanger = document.getElementById("colorChanger");
colorChanger.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  document.body.style.backgroundColor = randomColor;
  colorChanger.textContent = `Color: ${randomColor}`;
});

// Image gallery with improved navigation
const galleryImages = [
  { src: "./bec2eac8-dec8-4fd0-9896-597d0dbd16fc.jpg", description: "software development" },
  { src: "./natu.jpg", description: "kids" },
  { src: "./WhatsApp Image 2024-12-30 at 7.15.10 AM.jpeg", description: "language" }
];
let imgIndex = 0;
const galleryImg = document.getElementById("galleryImg");
const imageInfo = document.getElementById("imageInfo");
const nextImgBtn = document.getElementById("nextImg");

nextImgBtn.addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % galleryImages.length;
  galleryImg.src = galleryImages[imgIndex].src;
  imageInfo.textContent = `Image ${imgIndex + 1} of ${galleryImages.length}: ${galleryImages[imgIndex].description}`;
});

// Enhanced tab functionality
const tabButtons = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
      // Remove active state from all buttons
      tabButtons.forEach(b => b.classList.remove("active"));
      
      // Hide all tab contents
      tabContents.forEach(tc => tc.style.display = "none");
      
      // Show selected tab content
      const selectedTab = document.getElementById(`tab${btn.dataset.tab}`);
      selectedTab.style.display = "block";
      
      // Add active state to clicked button
      btn.classList.add("active");
  });
});

// Comprehensive form validation
const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameInput = document.getElementById("name");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Reset previous feedback
  feedback.textContent = "";
  feedback.style.color = "black";
  
  // Validation checks
  const validations = [
      {
          condition: nameInput.value.trim().length < 2,
          message: "Name must be at least 2 characters long!"
      },
      {
          condition: !emailInput.value.includes("@"),
          message: "Invalid email format! Must contain '@'."
      },
      {
          condition: passwordInput.value.length < 8,
          message: "Password must be at least 8 characters long!"
      }
  ];
  
  // Find first validation error
  const error = validations.find(val => val.condition);
  
  if (error) {
      // Show error
      feedback.textContent = error.message;
      feedback.style.color = "red";
  } else {
      // Successful submission
      feedback.textContent = "Form submitted successfully! 🎉";
      feedback.style.color = "green";
      
      // Optional: You could send form data to a server here
      console.log({
          name: nameInput.value,
          email: emailInput.value
      });
      
      // Clear form
      form.reset();
  }
});