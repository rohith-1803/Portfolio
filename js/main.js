import { initTheme } from './theme.js';
import { initTyping } from './typing.js';
import { initParticles } from './particles.js';
import { initAnimations } from './animations.js';
import { initPremiumMotion } from './premium.js';

initTheme(); initTyping(); initParticles(); initAnimations(); initPremiumMotion();
document.querySelector('#year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const progress = document.querySelector('.page-progress');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 16);
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height ? (window.scrollY / height) * 100 : 0}%`;
}, { passive: true });

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); navToggle.setAttribute('aria-expanded', open); navToggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'; });
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { navLinks.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); navToggle.querySelector('i').className = 'fa-solid fa-bars'; }));

const cursor = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', event => { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; }, { passive: true });
document.querySelectorAll('.magnetic').forEach(button => { button.addEventListener('pointermove', event => { const rect = button.getBoundingClientRect(); const x = event.clientX - rect.left - rect.width / 2; const y = event.clientY - rect.top - rect.height / 2; button.style.transform = `translate(${x * .12}px, ${y * .12}px)`; }); button.addEventListener('pointerleave', () => { button.style.transform = ''; }); });

document.querySelector('.contact-form').addEventListener('submit', event => { event.preventDefault(); const status = event.currentTarget.querySelector('.form-status'); status.textContent = 'Thanks - your message is ready to send.'; event.currentTarget.reset(); });
