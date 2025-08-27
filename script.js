// 🌙 Toggle Light/Dark Mode
function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark");

  // Optional: change button text or icon
  const toggleBtn = document.querySelector("header button");
  if (body.classList.contains("dark")) {
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }
}

// ✉️ Form Submission Handler
function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill out all fields before submitting.");
    return false;
  }

  // Show a simple confirmation message
  alert(`✅ Thank you, ${name}! Your message has been sent.`);

  // Reset form
  document.querySelector("form").reset();
  return false; // Prevent default submission (no server handling)
}

// 🆙 Optional: Scroll to Top Button Logic (Uncomment to use)
/*
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆️";
scrollBtn.classList.add("scroll-to-top");
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
*/function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
// Smooth scroll for sidebar links

document.querySelectorAll('.sidebar a').forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({

      top: target.offsetTop - 20,

      behavior: 'smooth'

    });

  });

});

// Contact form alert

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Your message has been sent!");

});

