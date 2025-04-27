// World Map Markers Animation
document.addEventListener("DOMContentLoaded", function() {
    // Handle fade-in for intro and client demography sections
    const sections = document.querySelectorAll('#intro, #client_demography, #services');
    
    sections.forEach(section => {
        if (section.id !== 'client_demography') {
            section.classList.add('fade-in');
        }

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
        'spain-marker': 'Spain',
        'portugal-marker': 'Portugal',
        'philipine-marker': 'Philipine',
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

    // Call the animateNumbers function when client_demography is visible
    const clientDemographySection = document.querySelector('#client_demography');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers(); // Call the new function
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(clientDemographySection);

    setTimeout(() => {
        markers.forEach(marker => {
            marker.classList.add('active');
            setTimeout(() => {
                marker.classList.remove('active');
            }, 1500);
        });
    }, 500);
});

function animateNumbers() {
    const completedProjects = document.querySelector('.demographic-info h2').childNodes[0]; // Updated to target <h2>
    const uniqueClients = document.querySelector('.demographic-info h2').childNodes[3]; // Unique Clients
    const countries = document.querySelector('.demographic-info h2').childNodes[6]; // Countries

    let projectsCount = 0;
    let clientsCount = 0;
    let countriesCount = 0;

    const targetProjects = 19;
    const targetClients = 16;
    const targetCountries = 12;

    const duration = 2000; // Duration in milliseconds
    const intervalTime = 50; // Interval time in milliseconds
    const incrementProjects = Math.ceil(targetProjects / (duration / intervalTime));
    const incrementClients = Math.ceil(targetClients / (duration / intervalTime));
    const incrementCountries = Math.ceil(targetCountries / (duration / intervalTime));

    const interval = setInterval(() => {
        if (projectsCount < targetProjects) {
            projectsCount += incrementProjects;
            completedProjects.textContent = Math.min(projectsCount, targetProjects) + " Completed projects";
        }
        if (clientsCount < targetClients) {
            clientsCount += incrementClients;
            uniqueClients.textContent =  Math.min(clientsCount, targetClients) + " Unique clients";
        }
        if (countriesCount < targetCountries) {
            countriesCount += incrementCountries;
            countries.textContent = Math.min(countriesCount, targetCountries) + " Different countries";
        }
        if (projectsCount >= targetProjects && clientsCount >= targetClients && countriesCount >= targetCountries) {
            clearInterval(interval);
        }
    }, intervalTime);
}

// Remove the call to animateNumbers from here
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
