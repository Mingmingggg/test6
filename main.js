let currentIndex = 0;

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    images[currentIndex].classList.add('active');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.parentNode.href; 

        // Check if the loading screen has already been shown in this session
        if (!sessionStorage.getItem('loadingShown')) {
            document.getElementById('loading-screen').style.display = 'flex';
            setTimeout(() => {
                window.location.href = url; 
            }, 2000);
            // Store a flag in session storage indicating the loading screen has been shown
            sessionStorage.setItem('loadingShown', 'true');
        } else {
            // If the loading screen was shown, just navigate without showing it
            window.location.href = url; 
        }
    });
}); 

// Optionally, you can clear the session storage when the page is unloaded
window.addEventListener('beforeunload', () => {
    sessionStorage.removeItem('loadingShown');
});
