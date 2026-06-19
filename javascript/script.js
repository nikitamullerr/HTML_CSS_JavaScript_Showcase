// Rushin

// =========================
// 1. WELCOME MESSAGE BUTTON
// =========================
function showWelcome() {
  alert(
    "Welcome to TutorLink!\n\nWe connect students with experienced tutors who help improve understanding, build confidence, and achieve academic success."
  );
}

// =========================
// 2. FOOTER YEAR AUTO UPDATE
// =========================
function updateYear() {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// =========================
// 3. IMPACT COUNTER ANIMATION
// =========================
function animateCounter(id, target, suffix = "") {
  const element = document.getElementById(id);
  if (!element) return;

  let count = 0;
  const speed = Math.ceil(target / 60);

  const interval = setInterval(() => {
    count += speed;

    if (count >= target) {
      count = target;
      clearInterval(interval);
    }

    element.textContent = count + suffix;
  }, 30);
}

// =========================
// 4. SCROLL REVEAL ANIMATION
// =========================
function revealOnScroll() {
  const sections = document.querySelectorAll(".hidden-au");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("show-au");
    }
  });
}

// =========================
// 5. VALUE CARD CLICK EFFECT
// =========================
function setupValueCards() {
  const cards = document.querySelectorAll(".value-card-au");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("active-au"));
      card.classList.add("active-au");
    });
  });
}

// =========================
// 6. INITIALIZE EVERYTHING
// =========================
window.addEventListener("DOMContentLoaded", () => {
  updateYear();

  animateCounter("students-au", 500, "+");
  animateCounter("tutors-au", 50, "+");
  animateCounter("satisfaction-au", 67, "%");

  revealOnScroll();
  setupValueCards();
});

// Scroll event listener
window.addEventListener("scroll", revealOnScroll);

/* Angela */



/* Adam */

// ─── Helper: navigate to a page ───
function navigateTo(url) {
  window.location.href = url;
}

// ─── HERO BUTTONS ───

// "Get Started" → Find a Tutor page
document.getElementById('btn-get-started').addEventListener('click', function () {
  navigateTo('findATutor.html');
});

// "Success Stories" → Testimonials page
document.getElementById('btn-success-stories').addEventListener('click', function () {
  navigateTo('testimonials.html');
});

// ─── NAV LINKS: highlight the active page ───
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('nav-active');
  }
});

// ─── FOOTER NAV LINKS: same active-page highlight ───
const footerNavLinks = document.querySelectorAll('.footer-col-links a');

footerNavLinks.forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('nav-active');
  }
});

// ─── SOCIAL ICONS: coming-soon message ───
// (replace alert with real URLs once social pages are live)
const socialIds = ['footer-instagram', 'footer-tiktok', 'footer-youtube'];

socialIds.forEach(function (id) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Our social media pages are coming soon! Stay tuned.');
    });
  }
});

// ─── FOOTER: Privacy Policy (coming soon) ───
// Prevents the bare # link jumping the page until the policy page is ready
var privacyLink = document.getElementById('footer-privacy-link');
if (privacyLink) {
  privacyLink.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Our Privacy Policy page is coming soon!');
  });
}


/* Nikita */



/* Lukho */