console.log("JavaScript loaded")



/* Rushin */

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
// function updateYear() {
//   const yearElement = document.getElementById("year");

//   if (yearElement) {
//     yearElement.textContent = new Date().getFullYear();
//   }
// }

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
  // updateYear();

  animateCounter("students-au", 500, "+");
  animateCounter("tutors-au", 50, "+");
  animateCounter("satisfaction-au", 67, "%");

  revealOnScroll();
  setupValueCards();
});

// Scroll event listener
window.addEventListener("scroll", revealOnScroll);



/* Angela */

// // TARGET HTML ELEMENTS
// const track = document.querySelector(".testimonial-track-tm");
// const cards = document.querySelectorAll(".story-card-tm");
// const prevBtn = document.querySelector(".left-arrow-tm");
// const nextBtn = document.querySelector(".right-arrow-tm");


// let currentLeftCardIndex = 0;
// const maxIndex = cards.length - 2;

// function slideCarousel() {
//     let slideAmount = 28;

//     if (window.innerWidth <= 950) {
//         slideAmount = 19.5;
//     }

//     track.style.transform = `translateX(-${currentLeftCardIndex * slideAmount}rem)`;
// }

// nextBtn.addEventListener("click", () => {
//     const maxIndex = window.innerWidth <= 950 ? cards.length - 1 : cards.length - 2;

//     if (currentLeftCardIndex < maxIndex) {
//         currentLeftCardIndex++;
//     } else {
//         currentLeftCardIndex = 0;
//     }
//     slideCarousel();
// });

// prevBtn.addEventListener("click", () => {
//     const maxIndex = window.innerWidth <= 950 ? cards.length - 1 : cards.length -2;

//     if (currentLeftCardIndex > 0) {
//         currentLeftCardIndex--;
//     } else {
//         currentLeftCardIndex = maxIndex;
//     }
//     slideCarousel();
// });

// TARGET HTML ELEMENTS
const track = document.querySelector(".testimonial-track-tm");
const cards = document.querySelectorAll(".story-card-tm");
const prevBtn = document.querySelector(".left-arrow-tm");
const nextBtn = document.querySelector(".right-arrow-tm");

if (track && prevBtn && nextBtn) {

  let currentLeftCardIndex = 0;

  function slideCarousel() {
    let slideAmount = 28;

    if (window.innerWidth <= 950) {
      slideAmount = 19.5;
    }

    track.style.transform =
      `translateX(-${currentLeftCardIndex * slideAmount}rem)`;
  }

  nextBtn.addEventListener("click", () => {
    const maxIndex =
      window.innerWidth <= 950
        ? cards.length - 1
        : cards.length - 2;

    if (currentLeftCardIndex < maxIndex) {
      currentLeftCardIndex++;
    } else {
      currentLeftCardIndex = 0;
    }

    slideCarousel();
  });

  prevBtn.addEventListener("click", () => {
    const maxIndex =
      window.innerWidth <= 950
        ? cards.length - 1
        : cards.length - 2;

    if (currentLeftCardIndex > 0) {
      currentLeftCardIndex--;
    } else {
      currentLeftCardIndex = maxIndex;
    }

    slideCarousel();
  });

}


/* Adam */

// ─── Helper: navigate to a page ───
function navigateToHp(url) {
  window.location.href = url;
}

// ─── HERO BUTTONS ───

// "Get Started" → Find a Tutor page
// document.getElementById('btn-get-started-hp').addEventListener('click', function () {
//   navigateToHp('findATutor.html');
// });
// 12:30 21/06/2026
const getStartedBtn = document.getElementById('btn-get-started-hp');

if (getStartedBtn) {
  getStartedBtn.addEventListener('click', function () {
    navigateToHp('findATutor.html');
  });
}
// "Success Stories" → Testimonials page
// document.getElementById('btn-success-stories-hp').addEventListener('click', function () {
//   navigateToHp('testimonials.html');
// });
//12:32 21/06/2026
const successStoriesBtn = document.getElementById('btn-success-stories-hp');

if (successStoriesBtn) {
  successStoriesBtn.addEventListener('click', function () {
    navigateToHp('testimonials.html');
  });
}

// ─── NAV LINKS: highlight the active page ───
const navLinksHp = document.querySelectorAll('.nav-links-hp a');
const currentPageHp = window.location.pathname.split('/').pop() || 'index.html';

navLinksHp.forEach(function (link) {
  if (link.getAttribute('href') === currentPageHp) {
    link.classList.add('nav-active-hp');
  }
});

// ─── FOOTER NAV LINKS: same active-page highlight ───
const footerNavLinksHp = document.querySelectorAll('.footer-column a');

footerNavLinksHp.forEach(function (link) {
  if (link.getAttribute('href') === currentPageHp) {
    link.classList.add('nav-active-hp');
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


// Nikita

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

// closeModal.addEventListener("click", () => {
//   modal.style.display = "none";
// });
//12:51 21/06/2026

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// filtering buttons - find a tutor page
// const searchBtn = document.querySelector(".search-btn-fat");

// if (searchBtn) {

// searchBtn.addEventListener("click", () => {
//12:54 21/06/2026
const searchBtn = document.querySelector(".search-btn-fat");

if (searchBtn) {
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
      selectedAvailability === "Any Availability" ||
      selectedAvailability === availability;

    const styleMatch =
      selectedStyle === "Any Style" ||
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
}



// Lukho

// TutorLink - Contact Page JS 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm'); // HTML has no -ct on id
  const statusEl = document.getElementById('formStatus'); // HTML has no -ct on id
  // const submitBtn = form.querySelector('.btn-submit-ct');
  const titleEl = document.querySelector('.contact-title-ct');

  let submitBtn = null;

  if (form) {
    submitBtn = form.querySelector('.btn-submit-ct');
  }

  /* 1. TYPING ANIMATION FOR TITLE */
  if (titleEl) {
    const text = titleEl.textContent;
    titleEl.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        titleEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, 60);
      }
    };
    setTimeout(type, 300);
  }

  /* 2. SCROLL REVEAL */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active-ct'); // FIXED
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.info-card-ct, .contact-form-block-ct').forEach(el => { // FIXED
    el.classList.add('reveal-ct'); // FIXED
    observer.observe(el);
  });

  /* 3. 3D TILT EFFECT */
  document.querySelectorAll('.info-card-ct').forEach(card => { // FIXED
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  /* 4. FORM SUBMIT */
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-ct"></span> Sending...`; // FIXED
      statusEl.textContent = '';
      statusEl.className = 'form-status-ct'; // FIXED

      const formData = new FormData(form);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();

        if (response.ok && data.success) {
          statusEl.textContent = '✅ Message sent! We’ll get back to you ASAP.';
          statusEl.classList.add('success');
          form.reset();
        } else {
          statusEl.textContent = `❌ ${data.message || 'Something went wrong.'}`;
          statusEl.classList.add('error');
        }
      } catch (error) {
        statusEl.textContent = '❌ Could not send message. Check your internet.';
        statusEl.classList.add('error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }

  /* 5. NAVBAR SHRINK */
  const navbar = document.querySelector('.navbar-ct'); // FIXED

if (navbar) {  
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 768 && window.scrollY > 20) {
      navbar.classList.add('navbar-ct-scrolled'); // FIXED
    } else {
      navbar.classList.remove('navbar-ct-scrolled'); // FIXED
    }
  });
 }
}); 
