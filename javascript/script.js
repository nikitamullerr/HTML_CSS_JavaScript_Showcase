/* Rushin */


/* Angela */

// TARGET HTML ELEMENTS
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".story-card");
const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");


let currentLeftCardIndex = 0;
// const maxIndex = cards.length - 2;

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



/* Nikita */



/* Lukho */