//Ecommerce del sitio

function comprar(nombre, email, tel, productosEnCarro) {
    let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);  
    alert("Gracias" + nombre + " por tu compra. \n Total: $" + cant);   
}

let productos = [
    new Producto(1001, 'Cupcake de frambuesa', 250, 'Cupcakes'),
    new Producto(1002, 'Cupcake de vainilla y chips', 250, 'Cupcakes'),
    new Producto(1003, 'Cupcake de limón', 250, 'Cupcakes'),
    new Producto(1004, 'Cupcake de chocolate', 300,'Cupcakes'),

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
    new Producto(4003, 'Macarons', 150,'Masas Finas'),
    new Producto(4004, 'Petit fours', 150, 'Masas Finas'),

];

let categorias = ["Cupcakes", "Alfajores", "Tartas", "Masas Finas"];

let productosEnCarro = [];

let categoria = "";


while (categoria != "salir" && categoria != null) {
    let aux = categorias.join ("\n");
    categoria = prompt(
        'Ingrese un categoria para continuar con su compra o ingrese "salir": \n(' + aux + ")"
    );
   
    if (categoria != "salir" && categoria != null) {
       let productosFiltradoPorCategoria = productos.filter(
        (item) => item.categoria == categoria
        );

        
        let cartel = "";
        for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {
            cartel += productosFiltradoPorCategoria[i].mostrarProducto();
        }

        let idSeleccionado = parseInt(
            prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel)
        );

        let productoParaCarro = productosFiltradoPorCategoria.find(
            (item) => item.id == idSeleccionado
            );

        if (productoParaCarro) {
                productosEnCarro.push(productoParaCarro);                
            }            
    }    
}

if (productosEnCarro.length > 0) {
    alert('Para terminar su compra, ingrese sus datos: ');
    let nombre = prompt('ingrese su nombre');
    let mail = prompt('ingrese su email');
    let tel = prompt('ingrese su teléfono');
    comprar(nombre, mail, tel, productosEnCarro);
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