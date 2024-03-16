const headerLinks = document.querySelector('.header-style__links');

document.getElementById('handleNavbar').addEventListener('click', () => {
    headerLinks.classList.toggle('open');
})