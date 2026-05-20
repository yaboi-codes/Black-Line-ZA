// Smooth Scroll Animation
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade in on scroll
const cards = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0px)';
        }
    });
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease';

    observer.observe(card);
});
```

---

## Suggested Folder Structure

```plaintext
black-line-za/
│
├── index.html
├── styles.css
├── script.js
└── images/
```

## Quick Improvements You Can Add Later

* Add a shopping cart popup
* Add a loading animation using the black line
* Add dark/light mode toggle
* Add hover distortion effects on clothing images
* Replace stock images with your own mockups
* Add GSAP animations later for premium motion
* Add a full clothing catalog page
