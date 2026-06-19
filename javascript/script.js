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
const navLinksHp = document.querySelectorAll('.nav-links-hp a');
const currentPageHp = window.location.pathname.split('/').pop() || 'index.html';

navLinksHp.forEach(function (link) {
  if (link.getAttribute('href') === currentPageHp) {
    link.classList.add('nav-active-hp');
  }
});

// ─── FOOTER NAV LINKS: same active-page highlight ───
const footerNavLinksHp = document.querySelectorAll('.footer-column-hp a');

footerNavLinksHp.forEach(function (link) {
  if (link.getAttribute('href') === currentPageHp) {
    link.classList.add('nav-active-hp');
  }
});



// ─── FOOTER: Privacy Policy (coming soon) ───
// Prevents the bare # link jumping the page until the policy page is ready
var privacyLinkHp = document.getElementById('footer-privacy-link-hp');
if (privacyLinkHp) {
  privacyLinkHp.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Our Privacy Policy page is coming soon!');
  });
}


/* Nikita */



/* Lukho */
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
      `You selected ${tutorName}.`

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

