window.onload = function() {
    const toggle = document.querySelector('#toggle-button');
    const navbar = document.querySelector('#hero-nav');

    console.log(navbar);

    toggle.addEventListener('click', () => {
        navbar.classList.toggle('active')
        console.log("click");
    });
}