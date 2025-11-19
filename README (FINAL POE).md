# WaffleWorld Website Project (POE Final Submission)

**Student:** Tumelo Teka  
**Student Number:** ST10126814  
**Module:** Web Development (Code: WEDE5020)  


## Project Overview
This repository contains the complete structure for the PoE (Parts 1, 2, and 3) for the WaffleWorld website. It includes multiple HTML pages with enhanced styling, responsive design, and comprehensive interactive functionality. The site showcases WaffleWorld's artisanal waffle products with a cohesive light pink theme and professional user experience, demonstrating skills in HTML5, CSS3, JavaScript, and Software Quality Assurance principles.

## Website Goals and Objectives
- Create a responsive, accessible, and visually appealing site using HTML5, CSS3, and JavaScript.
- Provide clear navigation across core pages with consistent design.
- Implement interactive features including FAQ toggle, mobile navigation, form submissions, dynamic content, and search/filtering.
- Demonstrate mastery of responsive design, CSS styling, JavaScript functionality, and software quality assurance practices.
- Ensure the site meets SEO best practices (on-page and off-page).

## Key Features and Functionality
- Multi-page layout with shared navigation and consistent branding.
- Enquiry and Contact forms with client-side validation and simulated AJAX submissions.
- Interactive FAQ section with smooth toggle functionality.
- Mobile-responsive navigation with hamburger menu.
- Interactive elements: Accordions, Lightbox gallery.
- Dynamic content loading (e.g., Latest News).
- Search and filter functionality (e.g., for Services).
- Professional light pink color scheme with cohesive typography.
- Accessibility features with proper ARIA attributes and focus states.
- Responsive grid layouts that adapt to all screen sizes.
- SEO elements: Meta tags, sitemap.xml, robots.txt.

## Sitemap
- Home (`index.html`)  
- Menu (`menu.html`)  
- Order Now (`order.html`)  
- About (`about.html`)  
- MORE (Dropdown Navigation)
  - Gallery (`gallery.html`)  
  - Services (`services.html`)
  - Contact Us (`contact_us.html`)  
  - Enquiry (`enquiry.html`)
  - FAQ (`faq.html`)  

## Changelog

### v3.0 - November 19, 2025
- Added dynamic content loading for "Latest News" using JavaScript.
- Implemented search and filter functionality for services on the homepage.
- Enhanced enquiry and contact forms with client-side validation using JavaScript.
- Added simulated AJAX form submission for a better user experience.
- Improved form status messages (success, error, info) with auto-hide functionality.
- Added structured data (time tags) to news items for better SEO.
- Ensured all new interactive elements are accessible (ARIA labels, keyboard navigation).
- Improved mobile responsiveness for new sections (news grid, services grid).
- Added more descriptive alt text for images.
- Added a search bar for filtering services.
- Updated JavaScript to handle multiple forms generically.
- Ensured all new JavaScript functions are contained within the DOMContentLoaded event.
- Added robots.txt and sitemap.xml files for off-page SEO.

### v2.0 - November 14, 2025
- Added interactive accordions to "Why Choose Us" section for better user engagement.
- Implemented lightbox gallery feature for image previews on homepage.
- Enhanced enquiry form with client-side validation (name, email, message, type).
- Added AJAX form submission simulation with success/error feedback.
- Created a new `contact_us.html` page with a general contact form and validation.
- Improved SEO with meta tags, structured headings, and descriptive alt text.
- Created robots.txt and sitemap.xml for search engine optimization.
- Optimized page speed by minifying CSS/JS (not shown here, but recommended).
- Ensured mobile-friendliness with responsive design updates.
- Added smooth scrolling for anchor links.

### v1.0 - Initial Release (April 2025)
- **Initial Scaffold**: Created basic structure for Part 1 with five HTML pages
- **Basic CSS**: Added starter styling with consistent layout
- **Form Functionality**: Added JavaScript for form submission simulation
- **Fixed Form Submissions**: Added proper form handling for enquiry and contact forms
- **Improved Navigation**: Enhanced dropdown menu functionality with proper ARIA attributes
- **Responsive Adjustments**: Refined mobile breakpoints for better tablet and mobile experience
- **Enhanced FAQ Functionality**: Fixed FAQ toggle using `max-height` and JavaScript for smooth animations instead of `display: none/block`
- **Improved Mobile Navigation**: Added hamburger menu toggle with sliding animation and proper focus states
- **Responsive Design Optimization**: Added breakpoints for large desktops (`min-width: 1200px`) to optimize for wide screens
- **Accessibility Enhancements**: Added `:visited` pseudo-class for links and `:first-child`/:`last-child` for navigation items
- **Color Scheme Update**: Implemented cohesive light pink theme with `#FFF9FA`, `#FFB6C1`, `#D2691E`, and `#8B4513`
- **Typography Improvements**: Added `Playfair Display` for headings and consistent font scaling across devices
- **Interactive Elements**: Enhanced hover/focus states with smooth transitions and visual feedback
- **CSS Transitions**: Added smooth animations for FAQ toggle, card hover effects, and button interactions
- **Grid Layouts**: Implemented responsive grid systems that adapt from multi-column to single-column on mobile

## Technical Implementation
- **HTML5**: Semantic markup with proper structure and accessibility
- **CSS3**: External stylesheet with responsive design (Flexbox/Grid), transitions, and modern layout techniques
- **JavaScript**: Interactive functionality including FAQ toggle, mobile navigation, lightbox, accordions, form handling, dynamic content loading, and search/filtering
- **Responsive Design**: Three breakpoints covering mobile, tablet, and desktop
- **Accessibility**: Proper ARIA attributes, focus states, and color contrast ratios
- **SEO**: Meta tags, sitemap.xml, robots.txt, structured headings, alt text.

## GitHub Link
[https://github.com/ST10126814/WaffleShop.git] (https://github.com/ST10126814/WaffleShop.git)

## References
Mozilla Developer Network. (2025). *CSS Grid Layout*. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout  

Mozilla Developer Network. (2025). *Flexbox Layout*. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout  

Mozilla Developer Network. (2025). *Responsive Web Design*. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design  

Mozilla Developer Network. (2025). *Accessibility Fundamentals*. https://developer.mozilla.org/en-US/docs/Learn/Accessibility  

W3C. (2025). *HTML Living Standard*. https://html.spec.whatwg.org/  

W3C. (2025). *CSS Cascading and Inheritance Level 4*. https://www.w3.org/TR/css-cascade-4/  

Google Developers. (2025). *Responsive Web Design Basics*. https://developers.google.com/web/fundamentals/design-and-ux/responsive  

Google Developers. (2025). *Web Accessibility*. https://developers.google.com/web/fundamentals/accessibility  

WebAIM. (2025). *Web Accessibility Tutorials*. https://webaim.org/articles/  

Can I Use. (2025). *Browser Support Tables for CSS, HTML5, and JavaScript*. https://caniuse.com/  

Flynn, I. and McHoes, A. (2023) *Understanding Operating Systems*, 9th edn. Boston, MA: Cengage Learning. (For OS module context, if applicable)

Almishari, M. and Gollamudi, A. (2023) ‘Security and privacy in extended reality (XR): a systematic literature review’, *ACM Computing Surveys*, 56(2), pp. 1–36. doi: 10.1145/3626828. (For SQAT module context, if applicable)