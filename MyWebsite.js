document.addEventListener('DOMContentLoaded', function () {
    // Create and display the scroll-to-top button
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-top';
    scrollButton.textContent = 'Top';
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });


    scrollButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const banner = document.createElement('div');
    banner.innerHTML = `
        <div class="banner">
            <p>Stay updated with the latest cybersecurity threats! <a href="blog.html">Visit our blog</a></p>
            <button class="close-btn">&times;</button>
        </div>
    `;
    document.body.prepend(banner);


    document.querySelector('.close-btn').addEventListener('click', function() {
        banner.style.display = 'none';
    });


    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Toggle Dark Mode';
    darkModeButton.className = 'dark-mode-toggle';
    document.body.prepend(darkModeButton);


    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});


window.onload = function() {
    alert("Stay updated! Check out the latest cybersecurity threats and news on our blog.");
};
