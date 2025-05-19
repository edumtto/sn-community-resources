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