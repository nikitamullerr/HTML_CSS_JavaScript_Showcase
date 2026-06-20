

console.log("JavaScript loaded");

const bookButtons = document.querySelectorAll(".book-btn-fat");

const modal = document.getElementById("bookingmodal-fat");
const selectedTutor = document.getElementById("selectedTutor");
const closeModal = document.getElementById("closeModal-fat");

console.log(bookButtons);
console.log(modal);
console.log(closeModal);

bookButtons.forEach(button => {
  button.addEventListener("click", () => {

    const tutorCard = button.closest(".tutors-card-fat");
    const tutorName = tutorCard.querySelector(".tutors-name-fat").textContent;

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