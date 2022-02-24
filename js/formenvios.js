class Cliente {
    constructor(nombre, telefono, direccion) {
      this.nombre = nombre;
      this.telefono = telefono;
      this.direccion = direccion;
    }
  }
  //Llamamos el id del boton comprar y le agregamos un evento
  let boton = document.getElementById("comprar");
  boton.addEventListener("click", cargarCliente);
  //Capturamos los datos ingresados en el form
  function cargarCliente() {
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let direccion = document.getElementById("adress").value;
    let cliente1 = new Cliente(nombre, telefono, direccion); //Creamos un objeto con lo capturado
    console.log(cliente1);
    mostrarCliente(cliente1);
  }
  //Mostramos los datos del cliente atraves de un innerHTML
  function mostrarCliente(cliente) {
    let formulario = document.getElementById("customer");
    formulario.innerHTML = " ";
    //Agregamos una etiqueta div con texto y llamamos los atributos ingresados nombre y direccion que capturamos del form
    let nuevoContenido = document.createElement("div");
    nuevoContenido.className = "info-cliente";
    nuevoContenido.innerHTML = `Gracias  ${cliente.nombre} por su compra!<br> 
    Recibira su pedido en la direccion: ${cliente.direccion}`;
  //Mostramos el div que creamos
    formulario.appendChild(nuevoContenido);
  }
  