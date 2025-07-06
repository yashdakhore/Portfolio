var tl = gsap.timeline()

tl.from(".mail-section h1",{
    x:-500,
    delay:1,
    duration:.5,
    opacity:0,
})
tl.from(".right-nav a", {
    y:100,
    duration:.5,
    delay:1,
    stagger:.5,
    opacity:0,
})
gsap.from(".main-text h1", {
    y:500,
    duration:.5,
    delay:1,
    stagger:.5,
    opacity:0,
})




// Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Load last theme from localStorage (optional)
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.classList.remove("ri-moon-line");
  themeIcon.classList.add("ri-sun-line");
  themeIcon.style.color = "white";
} else {
  themeIcon.classList.remove("ri-sun-line");
  themeIcon.classList.add("ri-moon-line");
  themeIcon.style.color = "black";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("ri-moon-line");
    themeIcon.classList.add("ri-sun-line");
    themeIcon.style.color = "white";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.remove("ri-sun-line");
    themeIcon.classList.add("ri-moon-line");
    themeIcon.style.color = "black";
    localStorage.setItem("theme", "light");
  }
});