// Função para fechar os modais de links
const headerLinks = document.querySelector(".header-style__links");
const headerLinks2 = document.querySelector(".header-style__links2");

function fecharTodosModais() {
  headerLinks.classList.remove("open");
  headerLinks2.classList.remove("open2");
}

function toggleModal1() {
  fecharTodosModais();
  headerLinks.classList.add("open");
}

function toggleModal2() {
  fecharTodosModais();
  headerLinks2.classList.add("open2");
}

document.getElementById("handleNavbar").addEventListener("click", toggleModal1);

// Ouvinte de evento para abrir ou fechar o modal 2
document
  .getElementById("handleNavbar2")
  .addEventListener("click", toggleModal2);

// function fecharModais() {
//     headerLinks.classList.remove("open");
//     headerLinks2.classList.remove("open2");
//   }

//   // Ouvinte de evento para fechar o modal 1
//   document.getElementById("handleNavbar").addEventListener("click", () => {
//     headerLinks.classList.remove("open");
//     fecharModais(); // Chamando a função para fechar ambos os modais
//   });

//   // Ouvinte de evento para fechar o modal 2
//   document.getElementById("handleNavbar2").addEventListener("click", () => {
//     headerLinks2.classList.remove("open2");
//     fecharModais(); // Chamando a função para fechar ambos os modais
//   });

//Função para setar o tema no local storage do navegador
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.className = theme;
}

function getTheme() {
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

//função imediatamente invocada - IIFE (Immediately Invoked Function Expression)
(function test() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
})();

//função para setar o tema no local storage do navegador

//função para capturar o tema no local storage do navegador
