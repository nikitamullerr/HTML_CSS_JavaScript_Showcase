/* Rushin */


/* Angela */



/* Adam */



/* Nikita */



/* Lukho */
// TutorLink - Contact Page JS 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm'); // HTML has no -ct on id
  const statusEl = document.getElementById('formStatus'); // HTML has no -ct on id
  const submitBtn = form.querySelector('.btn-submit-ct');
  const titleEl = document.querySelector('.contact-title-ct');

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
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 768 && window.scrollY > 20) {
      navbar.classList.add('navbar-ct-scrolled'); // FIXED
    } else {
      navbar.classList.remove('navbar-ct-scrolled'); // FIXED
    }
  });
})