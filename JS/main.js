//Ecommerce del sitio

const seccionProductos = document.getElementById("seccionProductos");

const contenedorCarrito = document.getElementById("carrito-contenedor");

const botonVaciar = document.getElementById('vaciar-carrito');

const contadorCarrito = document.getElementById('contadorCarrito');

const precioTotal = document.getElementById('precioTotal');

botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})

//Productos
let stock = [
    {id:1001, nombre:'Cupcake de frambuesa', precio: 250, categoria: 'Cupcakes'},
    {id:1002, nombre:'Cupcake de vainilla y chips', precio: 250, categoria:'Cupcakes', img: '../img/cupcakes1.jpg'},
    {id:1003, nombre:'Cupcake de limón', precio: 250, categoria: 'Cupcakes'},
    {id:1004, nombre:'Cupcake de chocolate', precio:300, categoria: 'Cupcakes'},
    {id:2001, nombre:'Alfajor de masa sablé', precio: 150, categoria: 'Alfajores'},
    {id:2002, nombre:'Alfajor de chocolate', precio: 200, categoria: 'Alfajores'},
    {id:2003, nombre:'Alfajor de maicena', precio: 150, categoria: 'Alfajores'},
    {id:2004, nombre:'Alfajor de fruta', precio: 200, categoria: 'Alfajores'},
    {id:3001, nombre:'Tarta de frutas', precio: 750, categoria: 'Tartas'},
    {id:3002, nombre:'Lemon Pie', precio: 650, categoria: 'Tartas'},
    {id:3003, nombre:'Pastafrola', precio: 600, categoria: 'Tartas'},
    {id:3004, nombre:'Tarta de coco', precio: 600, categoria: 'Tartas'},
    {id:4001, nombre:'Cañones de dulce de leche', precio:100, categoria: 'Masas Finas'},
    {id:4002, nombre:'Bombas de crema', precio: 100, categoria: 'Masas Finas'},
    {id:4003, nombre:'Macarons', precio: 150, categoria: 'Masas Finas'},
    {id:4004, nombre:'Petit fours', precio: 150, categoria: 'Masas Finas'},
];

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }
});

stock.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
    <img src ${producto.img} alt ="">
    <h3>${producto.nombre}</h3>
    <p class = "precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class= fas fa-shopping cart"></button>
    `
    seccionProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    })

})

//Agregar al carrito
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)
    const item = stock.find ((prod) => prod.id === prodId)
    carrito.push(item);
    actualizarCarrito();
}

//Actualizar carrito
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito));
    })

    contadorCarrito.innerText = carrito.length;

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}

//Eliminar del carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

//PROBAR METODO REDUCE (DIAPO 25 DE CLASE 7)

/* const productos = [
  { id: 1, nombre: 'Arroz', precio: 125 },
  { id: 2, nombre: 'Fideo', precio: 70 },
  { id: 3, nombre: 'Pan', precio: 50 },
  { id: 4, nombre: 'Flan', precio: 100 },
];

for (const producto of productos) {
  let contenedor = document.createElement('div');
  //Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
  document.body.appendChild(contenedor);
} */

//Considerar Toastify para dejar un mensaje de confirmación de compra