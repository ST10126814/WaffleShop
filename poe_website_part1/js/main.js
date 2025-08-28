
// Basic JS to simulate form submissions for Part 1 (no backend yet).
document.addEventListener('DOMContentLoaded', () => {
  const enquiry = document.getElementById('enquiry-form');
  const contact = document.getElementById('contact-form');

  if (enquiry) {
    enquiry.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('enquiry-status');
      status.textContent = 'Thank you. Your enquiry has been recorded (demo).';
      enquiry.reset();
    });
  }

  if (contact) {
    contact.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('contact-status');
      status.textContent = 'Thanks for your message (demo).';
      contact.reset();
    });
  }
});
