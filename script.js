const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Optional: Scroll Reveal Animation
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => {
        alert('Message sent successfully!');
        this.reset();
      }, (error) => {
        alert('Oops... ' + JSON.stringify(error));
      });
  });

  document.getElementById('features-link').addEventListener('click', function(event) {
  event.preventDefault();

  const featuresSection = document.getElementById('features');

  // Smooth scroll manually
  featuresSection.scrollIntoView({ behavior: 'smooth' });

  // Remove slide-in class in case it's already there to restart animation
  featuresSection.classList.remove('slide-in');

  // Delay adding the slide-in class to trigger the animation AFTER scroll starts
  setTimeout(() => {
    featuresSection.classList.add('slide-in');
  }, 300); // Adjust timeout for smoothness
});