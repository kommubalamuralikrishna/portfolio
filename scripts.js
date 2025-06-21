// Toggle mobile menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

// Remove menu on scroll
window.onscroll = () => {
  navbar.classList.remove('active');
};

// Optional: Contact form handling with success message (if backend connected)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // You can implement a fetch call here or connect with Google Sheets / Formspree backend
    alert('Thank you! Your message has been submitted.');

    form.reset();
  });
}

// Dark mode toggle (if needed later)
// const darkModeBtn = document.querySelector("#darkmode");
// darkModeBtn.onclick = () => {
//   document.body.classList.toggle("active");
//   darkModeBtn.classList.toggle("bx-sun");
//   darkModeBtn.classList.toggle("bx-moon");
// };
