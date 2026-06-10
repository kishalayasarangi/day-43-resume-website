// Typewriter effect
const phrases = [
  'Mechanical Engineer 🔧',
  'Software Developer 💻',
  'Full Stack Builder 🌐',
  '120 Days of Code 🚀',
  'NIT Rourkela 2025–2029 🎓'
];

let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typeEl = document.getElementById('typeText');

function typeWriter() {
  const current = phrases[phraseIdx];
  if (isDeleting) {
    typeEl.textContent = current.slice(0, charIdx--);
    if (charIdx < 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeWriter, 400);
      return;
    }
  } else {
    typeEl.textContent = current.slice(0, charIdx++);
    if (charIdx > current.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000);
      return;
    }
  }
  setTimeout(typeWriter, isDeleting ? 60 : 100);
}

typeWriter();

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.querySelector('.bar')) {
        entry.target.querySelectorAll('.bar').forEach(bar => {
          bar.style.width = bar.style.width;
        });
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10,10,10,0.98)';
  } else {
    navbar.style.background = 'rgba(10,10,10,0.95)';
  }
});

// Mobile nav
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('navLinks').classList.remove('open');
    }
  });
});