// Hamburger Menu Functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling
    });
}

// Show/Hide Scroll-to-Top Button
window.addEventListener("scroll", () => {
    const scrollToTopButton = document.querySelector(".scrollToTop");
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add("visible");
        console.log("Button is now visible");
    } else {
        scrollToTopButton.classList.remove("visible");
        console.log("Button is now hidden");
    }
});
// Slideshow Functionality
let slides = document.querySelectorAll('.slide-container');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Wrap around to the first slide
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Wrap around to the last slide
    showSlide(currentIndex);
}

// Initialize the first slide
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        showSlide(currentIndex);
    }
});