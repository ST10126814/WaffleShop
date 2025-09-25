// Basic JS to simulate form submissions for Part 1 (no backend yet).
document.addEventListener('DOMContentLoaded', () => {
    // Form submission handlers
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

    // FAQ Toggle Functionality - Updated to work with CSS transitions
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle the expanded state
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle the FAQ icon
            const icon = this.querySelector('.faq-icon');
            icon.textContent = isExpanded ? '+' : '-';
            
            // Get the answer element
            const answer = this.nextElementSibling;
            
            if (isExpanded) {
                // Close the answer
                answer.style.maxHeight = '0px';
                answer.style.padding = '0 1.5rem';
            } else {
                // Open the answer
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '1.2rem 1.5rem';
            }
        });
    });

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Dropdown menu functionalit
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
            this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        });
    }
});