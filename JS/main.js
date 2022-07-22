//Ecommerce del sitio

let categorias = ["Cupcakes", "Alfajores", "Tartas", "Masas Finas"];
const containerCupcakes = document.getElementById("seccionCupcakes");

let carrito = [];

class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}


let productos = [
    new Producto(1001, 'Cupcake de frambuesa', 250, 'Cupcakes'),
    new Producto(1002, 'Cupcake de vainilla y chips', 250, 'Cupcakes'),
    new Producto(1003, 'Cupcake de limón', 250, 'Cupcakes'),
    new Producto(1004, 'Cupcake de chocolate', 300, 'Cupcakes'),

    new Producto(2001, 'Alfajor de masa sablé', 150, 'Alfajores'),
    new Producto(2002, 'Alfajor de chocolate', 200, 'Alfajores'),
    new Producto(2003, 'Alfajor de maicena', 150, 'Alfajores'),
    new Producto(2004, 'Alfajor de fruta', 200, 'Alfajores'),

    new Producto(3001, 'Tarta de frutas', 750, 'Tartas'),
    new Producto(3002, 'Lemon Pie', 650, 'Tartas'),
    new Producto(3003, 'Pastafrola', 600, 'Tartas'),
    new Producto(3004, 'Tarta de coco', 600, 'Tartas'),

    new Producto(4001, 'Cañones de dulce de leche', 100, 'Masas Finas'),
    new Producto(4002, 'Bombas de crema', 100, 'Masas Finas'),
    new Producto(4003, 'Macarons', 150, 'Masas Finas'),
    new Producto(4004, 'Petit fours', 150, 'Masas Finas'),

];

productos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p class = "precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class= fas fa-shopping cart"></button>
    `

    containerCupcakes.appendChild(div);

})

const boton = document.getElementById("agregar${producto.id}");

boton.addEventListener('click', () => {
agregarProductos(producto.id);
})

const agregarProductos = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item);
    console.log(carrito)
};

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