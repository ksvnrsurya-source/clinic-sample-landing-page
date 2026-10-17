const header = document.querySelector('.site-header');
const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30), { passive: true });

const menu = document.querySelector('.menu-button');
menu.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  menu.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.form-status').textContent = 'Thank you — our care team will be in touch within one working day.';
  event.target.reset();
});
