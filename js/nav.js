let header = document.getElementById("menu");
//Capturamos el id del header y creamos un elemento nav
let navBar = document.createElement("nav");

navBar.classList.add("navbar", "navbar-expand-lg");
//Le agrego las clases de la etiqueta nav y la variable navbar le agrego el contenido de mi barra de navegacion
navBar.innerHTML = `
<div class="container-fluid">
<a class="navbar-brand" href="/index.html">
<img src="/img/LogoBlack.png" alt="" width="108" height="95" 
class="d-inline-block align-text-top"></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#combos">Nuestras bebidas</a>
    </li>
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#carrito">Carrito</a>
  </li>
  </ul>
</div>
</div>
`;
//Llamo la variable header y le agrego el elemento creado
header.appendChild(navBar);