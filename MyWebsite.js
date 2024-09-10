// JavaScript to Show/Hide Scroll to Top Button
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-top';
    scrollButton.textContent = 'Top';
    document.body.appendChild(scrollButton);

    // Show button when scrolled down 200px
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
