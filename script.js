
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('open'));
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('New inquiry from Clarix Compliance website');
    const body = encodeURIComponent(`Name: ${data.get('name')}
Email: ${data.get('email')}
Company: ${data.get('company') || ''}
Topic: ${data.get('topic')}

Message:
${data.get('message')}`);
    window.location.href = `mailto:Dunya.zadran@outlook.dk?subject=${subject}&body=${body}`;
  });
}
