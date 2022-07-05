//Login de usuario
let usuario = '';

while (usuario != 'Maxi') {
    usuario = prompt('Ingrese su usuario')
    if (usuario == '') {
        alert(`Bienvenido ${usuario}`)
    }else{
        alert(`${usuario}, no tienes cuenta! Debes crearte una.`);
    }
} 

let contrasena = '';

while (contrasena != '1234'){
    contrasena = prompt('Ingrese su contraseña');
    if (contrasena == '1234') {
        alert('Identificacion verificada')
    }else{
        alert('Contraseña incorrecta');
    }   
}


/* // Carrito de compras

//Variables globales
const items = [
    {items: 'Torta brownie', precio: 1000},
    {items: 'Alfajor de maicena', precio: 150},
    {items: 'Budin de limon', precio: 600}
];
let accion;


//Funciones 
const seleccionItem = (items) => {
    console.log(`Usted a seleccionado ${items4}`) 
}

seleccionItem();4
const checkout = (precio) => {
    
}

//Menu
do {
    accion = Number(prompt('Seleccione una accion: \n\n1 - Seleccion de productos\n2 - Proceder al pago\n3 - Vaciar carrito\n4 - Salir'));
    switch (accion) {
        case 1:
             
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            alert('Vuelva pronto!');
            break;
    
        default:
            alert(`Opcion incorrecta`)
            break;
    }

}while(accion !== 4);

console.log(items); */