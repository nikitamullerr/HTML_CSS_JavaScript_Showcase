/* Rushin */


/* Angela */

// TARGET HTML ELEMENTS
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".story-card");
const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");


let currentLeftCardIndex = 0;
const maxIndex = cards.length - 2;

function slideCarousel() {
    let slideAmount = 28;

    if (window.innerWidth <= 950) {
        slideAmount = 19.5;
    }

    track.style.transform = `translateX(-${currentLeftCardIndex * slideAmount}rem)`;
}

nextBtn.addEventListener("click", () => {
    const maxIndex = window.innerWidth <= 950 ? cards.length - 1 : cards.length - 2;

    if (currentLeftCardIndex < maxIndex) {
        currentLeftCardIndex++;
    } else {
        currentLeftCardIndex = 0;
    }
    slideCarousel();
});

prevBtn.addEventListener("click", () => {
    const maxIndex = window.innerWidth <= 950 ? cards.length - 1 : cards.length -2;

    if (currentLeftCardIndex > 0) {
        currentLeftCardIndex--;
    } else {
        currentLeftCardIndex = maxIndex;
    }
    slideCarousel();
});


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