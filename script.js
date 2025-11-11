document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Smooth Scroll for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- 2. Mobile Menu Toggle ---
    const navLinks = document.querySelector('.nav-links');
    
    // Create and insert the menu toggle button
    const toggleButton = document.createElement('div');
    toggleButton.classList.add('menu-toggle');
    toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.navbar').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = toggleButton.querySelector('i');
        // Toggle between hamburger and close icon
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            const icon = toggleButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- 3. Testimonial Slider Logic ---
    const slider = document.querySelector('.testimonial-slider');
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;

    // Function to show a specific slide
    const updateSlider = () => {
        // Translate the slider container horizontally
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        // Update the active dot
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    };

    // Create dots dynamically
    cards.forEach((card, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });

    // Auto-advance the slider
    const autoSlide = () => {
        currentSlide = (currentSlide + 1) % cards.length;
        updateSlider();
    };

    setInterval(autoSlide, 5000); // Change slide every 5 seconds

    // --- 4. Order Modal Logic ---
    const modal = document.getElementById("orderModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.querySelector(".close-btn");

    if (openBtn) {
        openBtn.onclick = function() {
            modal.style.display = "block";
        }
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close the modal if the user clicks anywhere outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
