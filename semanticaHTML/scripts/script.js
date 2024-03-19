const headerLinks = document.querySelector(".header-style__links");

document.getElementById("handleNavbar").addEventListener('click', () => {
    headerLinks.classList.toggle("open")
})

function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }
  

function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        document
            .getElementById("toggle")
            .classList.replace("bi-brightness-high-fill", "bi-moon-fill");

        setTheme("theme-light");
    } else {
        document
            .getElementById("toggle")
            .classList.replace("bi-moon-fill", "bi-brightness-high-fill");
        setTheme("theme-dark");
    }
}

(function () {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
    } else {
        setTheme("theme-light");
    }
})();