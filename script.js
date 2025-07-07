var tl = gsap.timeline()

tl.from(".mail-section h1", {
    x: -150,      // smaller slide distance for just the h1
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
})
tl.from(".right-nav a", {
    y:100,
    duration:.5,
    delay:1,
    stagger:.5,
    opacity:0,
    clearProps: "all"
})
gsap.from(".main-text h1", {
    y:500,
    duration:.5,
    delay:1,
    stagger:.5,
    opacity:0,
    clearProps: "all"
})


const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('ri-sun-line');
    themeIcon.classList.add('ri-moon-line');
  } else {
    themeIcon.classList.remove('ri-moon-line');
    themeIcon.classList.add('ri-sun-line');
  }
});




// Copy Email Button Functionality
const copyBtn = document.getElementById('copy-btn');
const emailText = document.getElementById('email-text');

copyBtn.addEventListener('click', function() {
  // Copy the email text to clipboard
  navigator.clipboard.writeText(emailText.textContent.trim());

  // Change button text to 'Copied!'
  copyBtn.textContent = 'Copied!';

  // Revert back to 'Copy' after 1.5 seconds
  setTimeout(() => {
    copyBtn.textContent = 'Copy';
  }, 1500);
});