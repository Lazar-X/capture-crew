window.onload = function() {
    const toggle = document.querySelector('#toggle-button');
    const navbar = document.querySelector('#hero-nav');

    toggle.addEventListener('click', () => {
        navbar.classList.toggle('active')
    });
}