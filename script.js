/* =========================================================
   HOME
   ========================================================= */
const carousel = document.querySelector('.about-carousel');

let isDragging = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;

    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;

    carousel.style.cursor = 'grabbing';
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;

    carousel.scrollLeft = scrollLeft - walk;
});

/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

const customCursor = document.querySelector(".custom-cursor");

if (customCursor) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        customCursor.style.left = `${cursorX}px`;
        customCursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const clickableElements = document.querySelectorAll(
        "a, button, label"
    );

    clickableElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            customCursor.classList.add("hover");
        });

        element.addEventListener("mouseleave", () => {
            customCursor.classList.remove("hover");
        });
    });
}

/* =========================================================
   DARK MODE TOGGLE
   ========================================================= */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.textContent = "☀";
    } else {
        themeIcon.textContent = "☾";
    }
});
