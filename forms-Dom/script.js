document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
    
  const form = document.querySelector("form");
  form.addEventListener("submit", enviarDados);

  loadUserData();

});

function enviarDados(event) {
  event.preventDefault();

  let listUsers = [];

  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
  };

  if (localStorage.getItem("users")) {
    listUsers = JSON.parse(localStorage.getItem("users"));
  }

  listUsers.push(userData);
  localStorage.setItem("users", JSON.stringify(listUsers));

  console.log(userData);

  window.location.reload()
}

function loadUserData() {
  const userListContainer = document.getElementById("userList");

  if (localStorage.getItem("users")) {
    const listUsers = JSON.parse(localStorage.getItem("users"));

    userListContainer.innerHTML = ""; // Limpa o conteúdo anterior

    let template = "";

    listUsers.forEach((user) => {
      template += `
            <tr>
                <td> ${user.name} </td>
                <td> ${user.email} </td>
                <td> ${user.age} </td>
            </tr>
        `;

      userListContainer.innerHTML = template;
    });
  }else{
    alert("Não tem nada cadastrado no localstorage")
  }
}
