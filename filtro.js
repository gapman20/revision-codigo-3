// Lista de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const contenedor = document.getElementById("lista-de-productos");
const input = document.querySelector('input');

// Función para crear elementos de producto
function crearElementoProducto(producto) {
  const divProducto = document.createElement("div");
  divProducto.classList.add("producto");

  const titulo = document.createElement("p");
  titulo.classList.add("titulo");
  titulo.textContent = producto.nombre;
  
  const imagen = document.createElement("img");
  imagen.setAttribute('src', producto.img);

  divProducto.appendChild(titulo);
  divProducto.appendChild(imagen);
  
  return divProducto;
}

// Mostrar productos iniciales
function mostrarProductos(productosMostrar) {
  // Limpiar contenedor primero
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
  
  // Agregar nuevos productos
  productosMostrar.forEach(producto => {
    const elemento = crearElementoProducto(producto);
    contenedor.appendChild(elemento);
  });
}

// Mostrar todos los productos al inicio
mostrarProductos(productos);

// Función de filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item => 
    item.tipo.includes(texto) || 
    item.color.includes(texto)
  );
}

// Evento del botón
const botonDeFiltro = document.querySelector("button");
botonDeFiltro.onclick = function() {
  const texto = input.value.toLowerCase();
  const productosFiltrados = filtrado(productos, texto);
  mostrarProductos(productosFiltrados);
}