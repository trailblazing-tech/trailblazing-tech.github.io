// Expertise Table Animation
document.addEventListener("DOMContentLoaded", function() {
    const expertiseTable = document.querySelector('.expertise_tb');
    
    // Add initial hidden state
    expertiseTable.classList.add('hidden-left');
    
    const animateExpertiseTable = () => {
        let start = null;
        const duration = 1000; // 1 second

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            
            expertiseTable.style.transform = `translateX(${-100 + (100 * percentage)}%)`;
            expertiseTable.style.opacity = percentage;
            
            if (percentage < 1) {
                requestAnimationFrame(step);
            } else {
                expertiseTable.classList.remove('hidden-left');
                expertiseTable.classList.add('slide-in-left');
            }
        };

        requestAnimationFrame(step);
    };

    // Trigger animation when table is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateExpertiseTable();
                observer.unobserve(expertiseTable);
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px' // Trigger when 100px from bottom of viewport
    });

    observer.observe(expertiseTable);
});

// Header Slide in animation
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    header.style.position = 'relative';
    header.style.opacity = 0;
    header.style.top = '-50px';

    const animateHeader = () => {
        let opacity = 0;
        let top = -50;

        const interval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.05;
                top += 2;
                header.style.opacity = opacity;
                header.style.top = top + "px";
            } else {
                clearInterval(interval);
            }
        }, 20);
    };

    animateHeader();
});
