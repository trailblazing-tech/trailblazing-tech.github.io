// Opacity Animation
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("content");
    let opacity = 0;
    let top = -50;

    const animateContent = () => {
        if (opacity < 1) {
            opacity += 0.01;
            top += 1;
            header.style.opacity = opacity;
            header.style.top = top + "px";
            requestAnimationFrame(animateContent);
        }
    };

    animateContent();
});


// Slide in animation
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    header.style.position = 'relative'; // Ensure the header is positioned relative
    header.style.opacity = 0; // Start with opacity 0
    header.style.top = '-50px'; // Start above the viewport

    const animateHeader = () => {
        let opacity = 0;
        let top = -50;

        const interval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.05; // Increase opacity
                top += 2; // Move down
                header.style.opacity = opacity;
                header.style.top = top + "px";
            } else {
                clearInterval(interval); // Stop the animation
            }
        }, 20); // Adjust the speed of the animation
    };

    animateHeader();
});
