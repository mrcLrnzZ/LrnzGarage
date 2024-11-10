document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector('.overlay');
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');

            // If the link is a hash link (#section), do nothing
            if (href.startsWith('#')) {
                return; // No fade effect, just allow the default behavior
            }

            // For all other links, prevent default and show fade effect
            event.preventDefault();  // Prevent default link behavior
            overlay.classList.add('show');  // Show the overlay

            // Delay the navigation slightly to allow the fade-out effect
            setTimeout(function() {
                window.location.href = href;  // Redirect to the new page
            }, 1100);  // Slightly more than the CSS transition duration (1 second)
        });
    });
});
