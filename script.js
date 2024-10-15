document.addEventListener('DOMContentLoaded', () => {
    // Slideshow functionality
    const images = [
        'cyberr.jpg',
        'cyber2.jpg',
        'cyber3.jpg' // Add paths to your images
    ];
    let currentIndex = 0;
    const slideshowDiv = document.querySelector('.slideshow');

    function showNextImage() {
        slideshowDiv.classList.add('slide-fade');
        setTimeout(() => {
            slideshowDiv.style.backgroundImage = `url(${images[currentIndex]})`;
            slideshowDiv.classList.remove('slide-fade');
            currentIndex = (currentIndex + 1) % images.length;
        }, 500);
    }

    showNextImage();
    setInterval(showNextImage, 5000); // Change every 5 seconds

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            
            if (targetElement) { // Check if the target element exists
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
        // Toggle the visibility of the scroll to top button
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }

        // Handle scroll animations
        handleScrollAnimation();
    };

    // Function to check if an element is in view
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Apply animation class when elements come into view
    function handleScrollAnimation() {
        const animatedElements = document.querySelectorAll('.fade-in');

        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('fade-in-visible'); // Add visible class
            }
        });
    }

    // Scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Download Resume functionality
    function downloadResume() {
        const link = document.createElement("a");
        link.href = "path/to/your/resume.pdf"; // Replace with the actual path to your resume file
        link.download = "Shubham_Kalra_Resume.pdf"; // Set a custom file name
        link.click();
    }

    // Event listener for scroll to top button
    scrollTopBtn.addEventListener("click", scrollToTop);

    // Trigger animation when the page loads
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('fade-in-visible'); // Add visible class if in view
        }
    });
});
