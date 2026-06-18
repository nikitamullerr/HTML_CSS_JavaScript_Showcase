<<<<<<< HEAD
/* Rushin */


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
=======
console.log("JavaScript loaded");

const bookButtons = document.querySelectorAll(".book-btn");

const modal = document.getElementById("bookingModal");
const selectedTutor = document.getElementById("selectedTutor");
const closeModal = document.getElementById("closeModal");

bookButtons.forEach(button => {
  button.addEventListener("click", () => {

    const tutorCard = button.closest(".tutor-card");
    const tutorName = tutorCard.querySelector(".tutor-name").textContent;

    selectedTutor.textContent =
      `You selected ${tutorName}.`;

    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// filtering buttons - find a tutor page
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {

    const selectedCourse =
        document.getElementById("course").value;

    const selectedPrice =
        document.getElementById("price").value;

    const selectedAvailability =
        document.getElementById("availability").value;

    const selectedStyle =
        document.getElementById("learning-style").value;

    const tutors =
        document.querySelectorAll(".tutor-card");

    tutors.forEach((tutor) => {

        const course = tutor.dataset.course;
        const price = tutor.dataset.price;
        const availability = tutor.dataset.availability;
        const style = tutor.dataset.style;

        const courseMatch =
            selectedCourse === "Select a subject" ||
            selectedCourse === course;

        const priceMatch =
            selectedPrice === price;

        const availabilityMatch =
            selectedAvailability === availability;

        const styleMatch =
            selectedStyle === style;

        if (
            courseMatch &&
            priceMatch &&
            availabilityMatch &&
            styleMatch
        ) {
            tutor.style.display = "block";
        } else {
            tutor.style.display = "none";
        }

    });

});

<<<<<<< HEAD
  });

});
>>>>>>> efff260 (added the css, and javascript to the home page)
=======
>>>>>>> 5cfc5f3 (changed the pop up for the book now button)
