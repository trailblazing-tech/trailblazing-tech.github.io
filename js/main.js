// World Map Markers Animation
document.addEventListener("DOMContentLoaded", function() {
    // Handle fade-in for intro and client demography sections
    const sections = document.querySelectorAll('#intro, #client_demography, #services');
    
    sections.forEach(section => {
        section.classList.add('fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 1000); // 1 second delay
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(section);
    });


    const markers = document.querySelectorAll('.marker');
    const popup = document.createElement('div');
    popup.className = 'country-popup';
    document.body.appendChild(popup);

    // Country data
    const countryData = {
        'austria-marker': 'Austria',
        'italy-marker': 'Italy',
        'new-zealand-marker': 'New Zealand',
        'germany-marker': 'Germany',
        'indonesia-marker': 'Indonesia',
        'sweden-marker': 'Sweden',
        'uk-marker': 'United Kingdom',
        'us-marker': 'United States',
        'qatar-marker': 'Qatar',
        'spain-marker': 'Spain'
    };


    markers.forEach(marker => {
        // Add hover effect
        marker.addEventListener('mouseenter', (e) => {
            const rect = marker.getBoundingClientRect();
            popup.textContent = countryData[marker.id];
            popup.style.left = `${rect.left + window.scrollX}px`;
            popup.style.top = `${rect.top + window.scrollY - 30}px`;
            popup.style.opacity = '1';
            marker.classList.add('active');
        });

        marker.addEventListener('mouseleave', () => {
            popup.style.opacity = '0';
            marker.classList.remove('active');
        });

        // Add click animation
        marker.addEventListener('click', () => {
            marker.classList.toggle('active');
            if (marker.classList.contains('active')) {
                popup.textContent = `Selected: ${countryData[marker.id]}`;
                popup.style.opacity = '1';
            } else {
                popup.style.opacity = '0';
            }
        });
    });

    // Auto-animate markers on page load
    setTimeout(() => {
        markers.forEach(marker => {
            marker.classList.add('active');
            setTimeout(() => {
                marker.classList.remove('active');
            }, 1500);
        });
    }, 500);
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
