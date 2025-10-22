// Service Details Data
const serviceDetails = {
    plumbing: {
        title: 'Plumbing Services',
        icon: '🔧',
        description: 'Our expert plumbers handle everything from minor repairs to complete system installations.',
        features: [
            'Leak detection and repair',
            'Pipe installation and replacement',
            'Faucet and fixture installation',
            'Drain cleaning and maintenance',
            'Water heater services',
            'Emergency plumbing repairs'
        ]
    },
    electrical: {
        title: 'Electrical Services',
        icon: '⚡',
        description: 'Professional electrical work performed by certified technicians.',
        features: [
            'Outlet and switch installation',
            'Lighting installation and repair',
            'Circuit breaker repairs',
            'Electrical safety inspections',
            'Wiring and rewiring projects',
            'Generator installation'
        ]
    },
    carpentry: {
        title: 'Carpentry Services',
        icon: '🪛',
        description: 'Expert carpentry for all your woodworking needs.',
        features: [
            'Custom furniture building',
            'Shelving and storage solutions',
            'Door and frame installation',
            'Deck and patio construction',
            'Trim and molding work',
            'Cabinet refinishing'
        ]
    },
    painting: {
        title: 'Painting Services',
        icon: '🎨',
        description: 'Professional painting services for interior and exterior projects.',
        features: [
            'Interior wall painting',
            'Exterior house painting',
            'Cabinet refinishing',
            'Accent wall design',
            'Pressure washing',
            'Stain and varnish work'
        ]
    },
    flooring: {
        title: 'Flooring Services',
        icon: '🏗️',
        description: 'Quality flooring solutions for any room.',
        features: [
            'Hardwood flooring installation',
            'Laminate and vinyl flooring',
            'Tile installation',
            'Floor refinishing',
            'Carpet installation',
            'Subfloor repair'
        ]
    },
    renovation: {
        title: 'Home Renovation',
        icon: '🏠',
        description: 'Complete home renovation services to transform your space.',
        features: [
            'Kitchen remodeling',
            'Bathroom renovation',
            'Room additions',
            'Basement finishing',
            'Full home makeovers',
            'Custom design consultation'
        ]
    }
};

// Load service details on service-detail.html
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');

    if (service && serviceDetails[service]) {
        const details = serviceDetails[service];
        const contentDiv = document.getElementById('serviceContent');

        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="service-detail-card">
                    <div class="service-detail-icon ${service}">${details.icon}</div>
                    <div class="service-detail-content">
                        <h2>${details.title}</h2>
                        <p>${details.description}</p>
                        <h3>What We Offer:</h3>
                        <ul>
                            ${details.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        <button class="btn btn-primary">Book This Service</button>
                    </div>
                </div>
            `;
        }
    }

    // Form submission handlers
    const loginForm = document.querySelector('#loginForm form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }

    const registerForm = document.querySelector('#registerForm form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterSubmit);
    }

    // CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Quote') || this.textContent.includes('Started') || this.textContent.includes('Touch') || this.textContent.includes('Service')) {
                e.preventDefault();
                alert('Thank you for your interest! Please fill out the form or contact us directly.');
            }
        });
    });

    // Service card links
    const serviceLinks = document.querySelectorAll('.service-link');
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href;
        });
    });
});

// Toggle between login and register forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm && registerForm) {
        loginForm.classList.toggle('hidden');
        registerForm.classList.toggle('hidden');
    }
}

// Handle login form submission
function handleLoginSubmit(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        console.log('[v0] Login attempt:', { email });
        alert('Login successful! Welcome back to HomEase.');
        // Here you would typically send data to a server
        e.target.reset();
    }
}

// Handle register form submission
function handleRegisterSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirm').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (name && email && phone && password) {
        console.log('[v0] Registration attempt:', { name, email, phone });
        alert('Account created successfully! Welcome to HomEase.');
        // Here you would typically send data to a server
        e.target.reset();
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add active class to current nav link
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
});

// Custom cursor effect
(function(){
  const dot = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');
  let mouseX = -100, mouseY = -100;
  let posX = 0, posY = 0;
  const speed = 0.18; // smoothness factor

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function loop(){
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    dot.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
    outline.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;

    requestAnimationFrame(loop);
  }
  loop();

  // Ripple click animation
  document.addEventListener('click', e => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  // Hover enlarge effect
  const hoverElements = ['button', 'a', 'input', 'textarea'];
  document.addEventListener('mouseover', e => {
    if (hoverElements.some(sel => e.target.closest(sel))) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (hoverElements.some(sel => e.target.closest(sel))) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Hide on touch
  if ('ontouchstart' in window) {
    dot.style.display = 'none';
    outline.style.display = 'none';
    document.body.style.cursor = 'auto';
  }
})();

const container = document.querySelector(".testimonial-container");
  const cards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");

  let index = 0;
  const visibleCards = 3;
  const totalCards = cards.length;

  // Clone first few cards to make looping smooth
  for (let i = 0; i < visibleCards; i++) {
    const clone = cards[i].cloneNode(true);
    container.appendChild(clone);
  }

  function slideTestimonials() {
    index++;
    const cardWidth = cards[0].offsetWidth + 40; // include gap
    container.style.transition = "transform 0.8s ease-in-out";
    container.style.transform = `translateX(-${index * cardWidth}px)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove("active-dot"));
    dots[index % dots.length].classList.add("active-dot");

    // Reset when end is reached
    if (index === totalCards) {
      setTimeout(() => {
        container.style.transition = "none";
        container.style.transform = "translateX(0)";
        index = 0;
      }, 850);
    }
  }

  setInterval(slideTestimonials, 3500);
