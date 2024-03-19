//Função para realizar o toggle do menu hamburger
const headerLinks = document.querySelector(".header-style__links");

document.getElementById("handleNavbar").addEventListener("click", () => {
  headerLinks.classList.toggle("open");
});

//função para setar o tema no local storage do navegador
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.className = theme;
}

//função para capturar o tema no local storage do navegador
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
