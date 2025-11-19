// main.js - Enhanced for House Of Grazie

document.addEventListener('DOMContentLoaded', function() {

  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active'); // Optional: Add active class to toggle button for styling
    });
  }

  // 2. Accordion Functionality (Why Choose Us)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const panel = this.nextElementSibling;
      const isActive = panel.style.maxHeight;

      // Close all panels
      document.querySelectorAll('.accordion-panel').forEach(p => {
        p.style.maxHeight = null;
        p.style.padding = '0 20px'; // Reset padding if needed for your CSS
      });

      // Open clicked panel
      if (!isActive) {
        panel.style.padding = '15px 20px'; // Set padding for open panel
        panel.style.maxHeight = panel.scrollHeight + 'px';
        // Close other panels (optional, handled by resetting above)
        document.querySelectorAll('.accordion-header').forEach(h => {
          if (h !== header) {
            h.setAttribute('aria-expanded', 'false');
          }
        });
        this.setAttribute('aria-expanded', 'true');
      } else {
        this.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // 3. Lightbox for Gallery Images
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const largeSrc = this.getAttribute('data-large') || this.src; // Fallback to current src if data-large not set
      const altText = this.getAttribute('alt') || 'Gallery Image';
      openLightbox(largeSrc, altText);
    });
  });

  function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="close">&times;</span>
        <img src="${src}" alt="${alt}">
      </div>
    `;
    document.body.appendChild(lightbox);

    // Close on click outside or ESC key
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.classList.contains('close')) {
        lightbox.remove();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        lightbox.remove();
      }
    });
  }

  // 4. Dynamic Promo Loading (Simulated) - For index.html
  const promoData = [
    {
      title: "Summer Berry Blast",
      description: "Try our new seasonal waffle topped with fresh berries and whipped cream. Available for a limited time!"
    },
    {
      title: "Weekend Brunch Special",
      description: "Join us for brunch on weekends! Enjoy a waffle combo with coffee for just R35."
    },
    {
      title: "Loyalty Program Launch",
      description: "Earn points with every purchase! Join our loyalty program and get your 10th waffle free."
    }
  ];

  const promoContainer = document.getElementById('promo-container');
  if (promoContainer) {
    promoData.forEach(promo => {
      const promoCard = document.createElement('article');
      promoCard.className = 'promo-card';
      promoCard.innerHTML = `
        <h3>${promo.title}</h3>
        <p>${promo.description}</p>
      `;
      promoContainer.appendChild(promoCard);
    });
  }

  // 5. Dynamic News Loading (Simulated) - For index.html
  const newsData = [
    {
      title: "Summer Berry Blast",
      description: "Try our new seasonal waffle topped with fresh berries and whipped cream. Available for a limited time!",
      date: "2025-11-10"
    },
    {
      title: "Weekend Brunch Special",
      description: "Join us for brunch on weekends! Enjoy a waffle combo with coffee for just R35.",
      date: "2025-11-08"
    },
    {
      title: "Loyalty Program Launch",
      description: "Earn points with every purchase! Join our loyalty program and get your 10th waffle free.",
      date: "2025-11-05"
    }
  ];

  const newsContainer = document.getElementById('news-container');
  if (newsContainer) {
    newsData.forEach(news => {
      const newsCard = document.createElement('article');
      newsCard.className = 'news-card';
      newsCard.innerHTML = `
        <h3>${news.title}</h3>
        <p>${news.description}</p>
        <time datetime="${news.date}">${news.date}</time>
      `;
      newsContainer.appendChild(newsCard);
    });
  }

  // 6. Services Search/Filter - For index.html
  const serviceSearch = document.getElementById('service-search');
  const serviceCards = document.querySelectorAll('.service-card');

  if (serviceSearch && serviceCards.length > 0) {
    serviceSearch.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category').toLowerCase();
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        if (category.includes(searchTerm) || title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // 7. Form Validation & AJAX Submission (Generalized)
  function setupForm(formId, statusId) {
    const form = document.getElementById(formId);
    const statusElement = document.getElementById(statusId);

    if (form && statusElement) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        let isValid = true;
        let errorMessage = '';

        // Basic validation example - adjust based on your form fields
        const name = formData.get('name') || formData.get('contact-name');
        const email = formData.get('email') || formData.get('contact-email');
        const message = formData.get('message') || formData.get('contact-message');

        if (!name || name.trim() === '') {
          isValid = false;
          errorMessage += 'Name is required. ';
        }
        if (!email || email.trim() === '' || !isValidEmail(email)) {
          isValid = false;
          errorMessage += 'Valid email is required. ';
        }
        if (!message || message.trim() === '') {
          isValid = false;
          errorMessage += 'Message is required. ';
        }

        if (isValid) {
          showStatus('Submitting...', 'info', statusElement);
          // Simulate AJAX submission
          setTimeout(() => {
            // In a real app, you would use fetch() here
            // fetch(form.getAttribute('action'), { method: 'POST', body: formData })
            //   .then(response => response.json())
            //   .then(data => {
            //     if (data.success) {
            //       showStatus('Thank you! Your message has been sent.', 'success', statusElement);
            //       form.reset();
            //     } else {
            //       showStatus('Error: ' + data.message, 'error', statusElement);
            //     }
            //   })
            //   .catch(error => {
            //     showStatus('Submission failed. Please try again.', 'error', statusElement);
            //   });

            // For demo purposes:
            showStatus('Thank you! Your message has been sent.', 'success', statusElement);
            form.reset();
          }, 1500);
        } else {
          showStatus(errorMessage, 'error', statusElement);
        }
      });
    }
  }

  // 8. Helper Functions
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showStatus(message, type, statusElement) {
    if (statusElement) { // Check if element exists
      statusElement.textContent = message;
      statusElement.className = `form-status ${type}`;
      statusElement.style.display = 'block';

      // Auto-hide success/error messages after 5 seconds
      if (type === 'success' || type === 'error') {
        setTimeout(() => {
          statusElement.style.display = 'none';
        }, 5000);
      }
    }
  }

  // 9. Initialize Forms
  setupForm('enquiry-form', 'enquiry-status');
  setupForm('contact-form', 'contact-status');

  // 10. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust offset as needed
          behavior: 'smooth'
        });
      }
    });
  });

  // 11. FAQ Toggle Functionality (Maintaining old functionality with CSS transitions)
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      // Toggle the expanded state
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle the FAQ icon
      const icon = this.querySelector('.faq-icon');
      if (icon) {
        icon.textContent = isExpanded ? '+' : '-';
      }
      
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

  // 12. Dropdown Menu Functionality
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('show');
        this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
      }
    });
  }

  // Close dropdowns if clicked outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-dropdown')) {
      const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
      openDropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
        const toggle = dropdown.previousElementSibling;
        if (toggle && toggle.classList.contains('dropdown-toggle')) {
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // 13. Image Lazy Loading (for performance) - If images have data-src
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  // 14. Scroll Animations (Fade in elements as they come into view)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section, .promo-card, .feature-card, .gallery-item').forEach(el => {
    observer.observe(el);
  });

  // 15. Theme Toggle (Light/Dark Mode - Optional Enhancement) - If theme-toggle button exists
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }
});