console.log("JavaScript loaded");
const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {
  button.addEventListener("click", () => {
    const tutorCard = button.closest(".tutor-card");
    const tutorName = tutorCard.querySelector(".tutor-name").textContent;

    alert(`You selected ${tutorName}`);
  });
});

// filtering buttons - find a tutor page
document.addEventListener("DOMContentLoaded", () => {

  const searchBtn = document.querySelector(".search-btn");
  const tutors = document.querySelectorAll(".tutor-card");
  const noResults = document.getElementById("no-results");

  searchBtn.addEventListener("click", () => {

    const selectedCourse = document.getElementById("course").value;
    const selectedPrice = document.getElementById("price").value;
    const selectedAvailability = document.getElementById("availability").value;
    const selectedStyle = document.getElementById("learning-style").value;

    let hasMatch = false;

    tutors.forEach((tutor) => {

      const course = tutor.dataset.course;
      const price = tutor.dataset.price;
      const availability = tutor.dataset.availability;
      const style = tutor.dataset.style;

      const courseMatch =
        selectedCourse === "Select a subject" || selectedCourse === course;

      const priceMatch =
        selectedPrice === "Any Price" || selectedPrice === price;

      const availabilityMatch =
        selectedAvailability === "Any Availability" || selectedAvailability === availability;

      const styleMatch =
        selectedStyle === "Any Style" || selectedStyle === style;

      if (courseMatch && priceMatch && availabilityMatch && styleMatch) {
        tutor.style.display = "block";
        hasMatch = true;
      } else {
        tutor.style.display = "none";
      }
    });

    // show/hide no results message
    if (hasMatch) {
      noResults.style.display = "none";
    } else {
      noResults.style.display = "block";
    }

  });

});