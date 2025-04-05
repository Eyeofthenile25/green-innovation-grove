
// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Tab Navigation for Awareness Page
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  if (tabButtons.length > 0 && tabPanes.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the tab to activate
        const tabId = button.getAttribute('data-tab');
        const tabToActivate = document.getElementById(tabId);
        
        if (tabToActivate) {
          tabToActivate.classList.add('active');
        }
      });
    });
  }
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      if (question) {
        question.addEventListener('click', function() {
          // Toggle the active class on the item
          item.classList.toggle('active');
          
          // Close other FAQ items
          faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
            }
          });
        });
      }
    });
  }
  
  // Video Play Button Functionality
  const videoCards = document.querySelectorAll('.video-card');
  
  if (videoCards.length > 0) {
    videoCards.forEach(card => {
      const playBtn = card.querySelector('.play-btn');
      
      if (playBtn) {
        playBtn.addEventListener('click', function() {
          // In a real implementation, you would replace the image with a video player
          // or open a modal with the video. For this demo, we'll just log a message.
          console.log('Video play button clicked. In a real implementation, the video would play.');
          
          // Example of what you might do:
          // const videoId = card.getAttribute('data-video-id');
          // openVideoModal(videoId);
        });
      }
    });
  }
  
  // Newsletter Form
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email === '') {
        alert('Please enter your email address.');
        return;
      }
      
      // In a real implementation, you would send the email to a server.
      // For this demo, we'll just log a message and reset the form.
      console.log(`Newsletter subscription request received for email: ${email}`);
      alert(`Thank you for subscribing with ${email}! You'll start receiving updates soon.`);
      
      newsletterForm.reset();
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href');
      
      // Only process if the href is not just "#"
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          event.preventDefault();
          
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add animation to elements when they come into view
  const animateElements = () => {
    const elements = document.querySelectorAll('.feature-card, .stat-card, .offer-card, .team-member');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initial animation check
  if (document.querySelectorAll('.feature-card, .stat-card, .offer-card, .team-member').length > 0) {
    // Set initial state
    document.querySelectorAll('.feature-card, .stat-card, .offer-card, .team-member').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Animate on scroll
    window.addEventListener('scroll', animateElements);
    
    // Initial animation
    setTimeout(animateElements, 100);
  }
});
