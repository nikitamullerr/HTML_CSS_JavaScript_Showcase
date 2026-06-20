/* Rushin */


/* Angela */



/* Adam */

// ─── Helper: navigate to a page ───
function navigateToHp(url) {
  window.location.href = url;
}

// ─── HERO BUTTONS ───

// "Get Started" → Find a Tutor page
document.getElementById('btn-get-started-hp').addEventListener('click', function () {
  navigateToHp('findATutor.html');
});

// "Success Stories" → Testimonials page
document.getElementById('btn-success-stories-hp').addEventListener('click', function () {
  navigateToHp('testimonials.html');
});

// ─── NAV LINKS: highlight the active page ───
const navLinksHp = document.querySelectorAll('.nav-links a');
const currentPageHp = window.location.pathname.split('/').pop() || 'index.html';

navLinksHp.forEach(function (link) {
  if (link.getAttribute('href') === currentPageHp) {
    link.classList.add('nav-active');
  }
});

// ─── FOOTER NAV LINKS: same active-page highlight ───
const footerNavLinksHp = document.querySelectorAll('.footer-column a');

footerNavLinksHp.forEach(function (link) {
  if (link.getAttribute('href') === currentPageHp) {
    link.classList.add('nav-active');
  }
});



// ─── FOOTER: Privacy Policy (coming soon) ───
// Prevents the bare # link jumping the page until the policy page is ready
var privacyLinkHp = document.getElementById('footer-privacy-link');
if (privacyLinkHp) {
  privacyLinkHp.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Our Privacy Policy page is coming soon!');
  });
}


/* Nikita */



/* Lukho */