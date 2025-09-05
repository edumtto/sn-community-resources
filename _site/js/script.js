// Filter Resources
function filterResources(category) {
  const resourceCards = document.querySelectorAll('.resource-card');
  const categoryBtns = document.querySelectorAll('.category-btn');

  // Update active button
  categoryBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category)) {
      btn.classList.add('active');
    }
  });

  // Filter cards
  resourceCards.forEach(card => {
    const cardCategories = card.dataset.category.split(' ');

    if (category === 'all' || cardCategories.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Change Text Size
function changeTextSize(action) {
  const html = document.documentElement;
  const currentSize = parseFloat(getComputedStyle(html).fontSize);

  switch (action) {
    case 'increase':
      html.style.fontSize = (currentSize * 1.1) + 'px';
      break;
    case 'decrease':
      html.style.fontSize = (currentSize * 0.9) + 'px';
      break;
    case 'reset':
      html.style.fontSize = '16px';
      break;
  }
}

setupLanguage();

function setupLanguage() {
  // Check if the language is already stored in localStorage
  const storedLanguage = localStorage.getItem('selectedLanguage');
  if (storedLanguage) {
    // If it is, set the language accordingly
    selectLanguage(storedLanguage);
  } else {
    selectLanguage('en'); // Default to English if not stored
  }
}

// Language switching functionality
function selectLanguage(lang) {
  console.log(`Language changed to: ${lang}`);
  // Store the selected language in localStorage
  localStorage.setItem('selectedLanguage', lang);

  // Update the language buttons
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });

  // Show/hide elements based on language
  document.querySelectorAll('[data-lang]').forEach(element => {
    if (element.getAttribute('data-lang') === lang) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  selectLanguage(savedLanguage);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navContainer = document.querySelector('.nav-container');

  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    navContainer.classList.toggle('active');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      navContainer.classList.remove('active');
    }
  });
});
// Newsletter form handling
document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      
      if (email) {
        // Simple validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          // Show success message
          showNotification('Thank you for subscribing! We\'ll keep you updated.', 'success');
          this.reset();
        } else {
          showNotification('Please enter a valid email address.', 'error');
        }
      }
    });
  }
});

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    z-index: 1000;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  // Set background color based on type
  if (type === 'success') {
    notification.style.backgroundColor = 'var(--accent)';
  } else if (type === 'error') {
    notification.style.backgroundColor = 'var(--secondary)';
  } else {
    notification.style.backgroundColor = 'var(--primary)';
  }
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 5000);
}

// Add hover effects for resource cards
document.addEventListener('DOMContentLoaded', () => {
  const resourceCards = document.querySelectorAll('.resource-card');
  
  resourceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Add click tracking for analytics (placeholder)
function trackEvent(eventName, eventData = {}) {
  console.log('Event tracked:', eventName, eventData);
  // Here you would integrate with your analytics service
  // Example: gtag('event', eventName, eventData);
}

// Track resource card clicks
document.addEventListener('DOMContentLoaded', () => {
  const resourceLinks = document.querySelectorAll('.resource-link');
  
  resourceLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const resourceTitle = this.closest('.resource-card').querySelector('.resource-title').textContent;
      trackEvent('resource_clicked', {
        resource_title: resourceTitle,
        resource_url: this.href
      });
    });
  });
});

// Track event card clicks
document.addEventListener('DOMContentLoaded', () => {
  const eventCards = document.querySelectorAll('.event-card');
  
  eventCards.forEach(card => {
    card.addEventListener('click', function(e) {
      const eventTitle = this.querySelector('.event-title').textContent;
      trackEvent('event_viewed', {
        event_title: eventTitle
      });
    });
  });
});
