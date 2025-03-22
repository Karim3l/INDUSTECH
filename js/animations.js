import { animate, stagger, inView } from "@motionone/dom";

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Direct vanilla JS approach for mobile menu
  const navToggler = document.getElementById('navbarToggler');
  const navMenu = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .btn-sign-up');
  
  // Function to check if menu is expanded
  function isMenuOpen() {
    return navMenu.classList.contains('show');
  }
  
  // Function to close the menu
  function closeMenu() {
    if (isMenuOpen() && navToggler) {
      navToggler.click();
    }
  }
  
  // Add click event to all nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });
  
  // Handle clicks outside the menu
  document.addEventListener('click', function(event) {
    // Only if menu is open
    if (isMenuOpen()) {
      // Only if click is outside both the menu and toggler
      if (!navMenu.contains(event.target) && event.target !== navToggler && !navToggler.contains(event.target)) {
        closeMenu();
      }
    }
  });
});

// Hero content animations
const heroContent = document.querySelector('.hero-content');
animate(
  heroContent,
  { 
    opacity: [0, 1],
    transform: ["translateY(20px)", "translateY(0px)"]
  },
  { 
    duration: 0.8,
    easing: "ease-out"
  }
);

// Stats cards animation
const statsContainer = document.querySelector('.stats-container');
animate(
  statsContainer,
  { 
    opacity: [0, 1],
    transform: ["translateY(30px)", "translateY(0px)"]
  },
  { 
    duration: 0.8,
    easing: "ease-out"
  }
);

// Floating icons animation
const floatingIcons = document.querySelectorAll('.floating-icon');
floatingIcons.forEach(icon => {
  animate(
    icon,
    {
      transform: ["translate(0px, 0px)", "translate(0px, -10px)", "translate(0px, 0px)"]
    },
    {
      duration: 2,
      easing: "ease-in-out",
      repeat: Infinity
    }
  );
});

// Rating stars animation
const stars = document.querySelector('.stars');
animate(
  stars,
  {
    scale: [0.8, 1],
    opacity: [0, 1]
  },
  {
    duration: 0.5,
    delay: 1
  }
);

// Scroll animations
inView('.hidden', ({ target }) => {
  target.classList.add('show');
  return false;
});

// Services section animations
inView('.services-header', ({ target }) => {
  animate(
    target,
    { 
      opacity: [0, 1],
      transform: ['translateY(20px)', 'translateY(0)']
    },
    {
      duration: 0.8,
      easing: 'ease-out'
    }
  );
  return false;
});

// Service cards stagger animation
inView('.services-grid', ({ target }) => {
  animate(
    target.children,
    { 
      opacity: [0, 1],
      transform: ['translateY(30px)', 'translateY(0)']
    },
    {
      delay: stagger(0.1),
      duration: 0.8,
      easing: 'ease-out'
    }
  );
  return false;
});

// Integrations section animations
inView('.integrations-content', ({ target }) => {
  animate(
    target,
    { 
      opacity: [0, 1],
      transform: ['translateY(20px)', 'translateY(0)']
    },
    {
      duration: 0.8,
      easing: 'ease-out'
    }
  );
  return false;
});

// Hub center and circles animations
inView('.integration-hub', ({ target }) => {
  // Animate hub center
  animate(
    target.querySelector('.hub-center'),
    {
      scale: [0, 1],
      opacity: [0, 1]
    },
    {
      duration: 0.6,
      easing: 'ease-out'
    }
  );
  
  // Animate inner circle
  animate(
    target.querySelector('.hub-inner-circle'),
    {
      scale: [0.5, 1],
      opacity: [0, 1]
    },
    {
      duration: 0.8,
      delay: 0.2,
      easing: 'ease-out'
    }
  );
  
  // Animate outer circle
  animate(
    target.querySelector('.hub-outer-circle'),
    {
      scale: [0.5, 1],
      opacity: [0, 1]
    },
    {
      duration: 1,
      delay: 0.4,
      easing: 'ease-out'
    }
  );
  
  // Animate inner circle logos with stagger
  animate(
    target.querySelectorAll('.hub-inner-circle .integration-logo'),
    {
      opacity: [0, 1],
      scale: [0.5, 1]
    },
    {
      delay: stagger(0.1, { start: 0.6 }),
      duration: 0.5,
      easing: 'ease-out'
    }
  );
  
  // Animate outer circle logos with stagger
  animate(
    target.querySelectorAll('.hub-outer-circle .integration-logo'),
    {
      opacity: [0, 1],
      scale: [0.5, 1]
    },
    {
      delay: stagger(0.1, { start: 0.8 }),
      duration: 0.5,
      easing: 'ease-out'
    }
  );
  
  // Add subtle floating animation to all logos
  const allLogos = target.querySelectorAll('.integration-logo');
  allLogos.forEach((logo, index) => {
    animate(
      logo,
      {
        transform: ['translateY(0px)', 'translateY(-5px)', 'translateY(0px)']
      },
      {
        delay: index * 0.2,
        duration: 2 + index * 0.3,
        easing: 'ease-in-out',
        repeat: Infinity
      }
    );
  });
  
  return false;
});

// CTA section animations
inView('.cta-content', ({ target }) => {
  animate(
    target,
    { 
      opacity: [0, 1],
      transform: ['translateY(20px)', 'translateY(0)']
    },
    {
      duration: 0.8,
      easing: 'ease-out'
    }
  );
  return false;
});

// Footer animations
inView('.footer-content', ({ target }) => {
  const columns = target.querySelectorAll('.footer-column, .footer-brand');
  
  animate(
    columns,
    { 
      opacity: [0, 1],
      transform: ['translateY(20px)', 'translateY(0)']
    },
    {
      duration: 0.6,
      delay: stagger(0.1),
      easing: 'ease-out'
    }
  );
  
  return false;
});

inView('.footer-bottom', ({ target }) => {
  animate(
    target,
    { 
      opacity: [0, 1],
      transform: ['translateY(10px)', 'translateY(0)']
    },
    {
      duration: 0.5,
      easing: 'ease-out',
      delay: 0.3
    }
  );
  
  return false;
}); 