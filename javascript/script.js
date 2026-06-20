console.log("script.js is loaded")


/* Rushin */


/* Angela */

// TARGET HTML ELEMENTS
const track = document.querySelector(".testimonial-track-tm");
const cards = document.querySelectorAll(".story-card-tm");
const prevBtn = document.querySelector(".left-arrow-tm");
const nextBtn = document.querySelector(".right-arrow-tm");


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

// filtering buttons - find a tutor page
const searchBtn = document.querySelector(".search-btn-fat");

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
    document.querySelectorAll(".tutors-card-fat");

  tutors.forEach((tutor) => {

    const course = tutor.dataset.course;
    const price = tutor.dataset.price;
    const availability = tutor.dataset.availability;
    const style = tutor.dataset.style;

    const courseMatch =
      selectedCourse === "Select a subject" ||
      selectedCourse === course;

    const priceMatch =
      selectedPrice === "Any Price" ||
      selectedPrice === price;

    const availabilityMatch =
      selectedCourse === "Any Availability" ||
      selectedAvailability === availability;

    const styleMatch =
      selectedCourse === "Any Style" ||
      selectedStyle === style;

    if (
      courseMatch &&
      priceMatch &&
      availabilityMatch &&
      styleMatch
    ) {
      tutor.style.display = "";
    } else {
      tutor.style.display = "none";
    }
  });
});