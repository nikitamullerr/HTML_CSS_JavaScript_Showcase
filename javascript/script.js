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

