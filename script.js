// Toggle Menu for Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Check if sections are in the viewport and add 'active' class
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-section');
    
    // Function to check if the section is in the viewport
    function checkSectionInView(section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('active');
        }
    }

    // Listen to the scroll event for each section
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            checkSectionInView(section);
        });
    });

    // Trigger on page load in case it's already in view
    sections.forEach(section => {
        checkSectionInView(section);
    });
});

// Hover effect for team members
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('mouseover', () => {
            member.style.boxShadow = '0 12px 24px rgba(106, 13, 173, 0.4)';
        });

        member.addEventListener('mouseout', () => {
            member.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
    });
});
// Select all service boxes
const serviceBoxes = document.querySelectorAll('.service-box');

// Add click event listeners to each box
serviceBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    alert(`You clicked on the ${box.querySelector('h3').textContent} service!`);
  });
});

// Optional: Add hover animation via JS (if you don't want to rely on CSS)
serviceBoxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'translateY(-5px)';
    box.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
  });

  box.addEventListener('mouseout', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
});

