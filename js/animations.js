import { animate, stagger, inView } from "@motionone/dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUp } from "countup.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: false,
  mirror: false
});

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initNavbarAnimations();
  initHeroAnimations();
  initStatsAnimations();
  initServiceAnimations();
  initBenefitAnimations();
  initPricingAnimations();
  initIntegrationsAnimations();
  initCountUpAnimations();
  initScrollEffects();
  
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

// Navbar animations
function initNavbarAnimations() {
  const navbar = document.querySelector('.navbar');
  
  // Change navbar style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
  
  // Animate navbar items
  gsap.from('.navbar-brand', {
    opacity: 0,
    x: -20,
    duration: 1,
    ease: 'power3.out'
  });
  
  gsap.from('.navbar-nav .nav-item', {
    opacity: 0,
    y: -20,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  });
  
  gsap.from('.btn-sign-up', {
    opacity: 0,
    x: 20,
    duration: 1,
    ease: 'power3.out'
  });
}

// Hero section animations
function initHeroAnimations() {
  const heroTimeline = gsap.timeline();
  
  heroTimeline
    .from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-content .btn', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.rating-container', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.2');
    
  // Continuous floating animation for icons
  const floatingIcons = document.querySelectorAll('.floating-icon');
  floatingIcons.forEach(icon => {
    gsap.to(icon, {
      y: '-10',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
}

// Stats animations
function initStatsAnimations() {
  gsap.from('.stats-container', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
  });
  
  // Add staggered reveal for stat cards
  gsap.from('.stat-card', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    delay: 0.8
  });
}

// Services animations
function initServiceAnimations() {
  ScrollTrigger.create({
    trigger: '.services',
    start: 'top 80%',
    onEnter: () => {
      gsap.from('.services-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      });
      
      gsap.from('.service-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.4
      });
    }
  });
  
  // Add hover effect for service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      gsap.to(this, {
        y: -10,
        boxShadow: '0 20px 50px rgba(27, 59, 54, 0.1)',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(this.querySelector('.service-arrow'), {
        x: 5,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', function() {
      gsap.to(this, {
        y: 0,
        boxShadow: '0 10px 30px rgba(27, 59, 54, 0.05)',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(this.querySelector('.service-arrow'), {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Benefits animations
function initBenefitAnimations() {
  ScrollTrigger.create({
    trigger: '#benefits',
    start: 'top 80%',
    onEnter: () => {
      gsap.from('.benefits-title, .benefits-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      gsap.from('.benefit-item', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.4
      });
      
      gsap.from('.metrics-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.6
      });
      
      // Chart bars animation
      gsap.from('.chart-bar', {
        height: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.8
      });
    }
  });
}

// Pricing animations
function initPricingAnimations() {
  ScrollTrigger.create({
    trigger: '#pricing',
    start: 'top 80%',
    onEnter: () => {
      gsap.from('.pricing-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      });
      
      gsap.from('.pricing-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 0.4
      });
    }
  });
  
  // Add hover effect for pricing cards
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      gsap.to(this, {
        y: -10,
        boxShadow: '0 20px 50px rgba(27, 59, 54, 0.1)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', function() {
      gsap.to(this, {
        y: 0,
        boxShadow: '0 10px 30px rgba(27, 59, 54, 0.05)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Integrations animations
function initIntegrationsAnimations() {
  ScrollTrigger.create({
    trigger: '#integrations',
    start: 'top 80%',
    onEnter: () => {
      gsap.from('.integrations-content', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
      });
      
      gsap.from('.integration-card', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.4
      });
    }
  });
}

// CountUp animations for numbers
function initCountUpAnimations() {
  // Options for CountUp
  const options = {
    duration: 2.5,
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
  };
  
  // Setup CountUp for all stat numbers
  const setupCountUp = (element, endValue) => {
    const countUp = new CountUp(element, endValue, options);
    
    // Create scroll trigger for each counter
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      },
      onEnterBack: () => {
        countUp.reset();
        countUp.start();
      }
    });
  };
  
  // Apply CountUp to numbers
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(element => {
    let value = element.textContent;
    // Extract just the number part
    let numberValue = parseInt(value.replace(/\D/g, ''));
    
    // If it's "100+" make it exactly 100 for animation
    if (value.includes('+')) {
      element.textContent = numberValue;
      setupCountUp(element, numberValue);
      // Add the plus sign after the animation
      element.setAttribute('data-suffix', '+');
    } else {
      setupCountUp(element, numberValue);
    }
  });
  
  // Apply to metrics total number
  const metricsNumber = document.querySelector('.metrics-total-number');
  if (metricsNumber) {
    let value = metricsNumber.textContent;
    let numberValue = parseInt(value.replace(/\D/g, ''));
    
    if (value.includes('+')) {
      metricsNumber.textContent = numberValue;
      setupCountUp(metricsNumber, numberValue);
      metricsNumber.setAttribute('data-suffix', '+');
    } else {
      setupCountUp(metricsNumber, numberValue);
    }
  }
  
  // Apply to metrics increase
  const metricsIncrease = document.querySelector('.metrics-increase span');
  if (metricsIncrease) {
    let value = metricsIncrease.textContent;
    let numberValue = parseInt(value);
    setupCountUp(metricsIncrease, numberValue);
  }
}

// General scroll effects
function initScrollEffects() {
  // Parallax effect for sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    gsap.to(section, {
      backgroundPositionY: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
  
  // Fade in sections on scroll
  gsap.utils.toArray('.fade-in-section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    });
  });
}

// Utility function to apply AOS attributes to elements
function applyAOSAttributes() {
  // Apply to various elements for additional animations
  const elements = [
    { selector: '.service-card', attr: { 'data-aos': 'fade-up', 'data-aos-delay': '0' } },
    { selector: '.benefit-item', attr: { 'data-aos': 'fade-right', 'data-aos-delay': '200' } },
    { selector: '.pricing-card', attr: { 'data-aos': 'zoom-in', 'data-aos-delay': '0' } },
    { selector: '.integration-card', attr: { 'data-aos': 'flip-left', 'data-aos-delay': '0' } }
  ];
  
  elements.forEach(({selector, attr}) => {
    const els = document.querySelectorAll(selector);
    els.forEach((el, index) => {
      Object.entries(attr).forEach(([key, value]) => {
        // If it's a delay, stagger it based on index
        if (key === 'data-aos-delay' && value !== '0') {
          const delay = parseInt(value) + (index * 100);
          el.setAttribute(key, delay.toString());
        } else {
          el.setAttribute(key, value);
        }
      });
    });
  });
} 