const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
reveals.forEach((el) => observer.observe(el));

const form = document.getElementById('quoteForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim();
  const message = `Hey LO'S Lawnscape, my name is ${name}. I need a quote for ${service}. Address/area: ${address}. Details: ${details}`;
  window.location.href = `sms:9103782417?body=${encodeURIComponent(message)}`;
});
