/* Login de usuario

let usuario = '';

while (usuario != 'Maxi') {
    usuario = prompt('Ingresar su usuario')
    if (usuario == 'Maxi') {
        alert('Bienvendio Maxi')
    }else{
        alert(usuario + ', tu no tienes cuenta!');
    }
} 

let contrasena = '';

while (contrasena != '1234'){
    contrasena = prompt('Ingrese su contraseña');
    if (contrasena == '1234') {
        alert('Identificacion verificada')
    }else{
        alert('Contraseña incorrecta, tu no eres Maxi');
    }   
} */

// Carrito de compras

//Variables globales
let item = ['Torta brownie', 'Alfajor de maicena', 'Budin de limon'];
let accion;
let precio;

//Menu
do {
    accion = Number(prompt('Seleccione una accion: \n\n1 - Seleccion de productos\n2 - Proceder al pago\n3 - Vaciar carrito\n4 - Salir'));
    switch (accion) {
        case 1:
            do {
                item = Number(prompt(`Seleccione un producto: \n\n1 - Torta brownie\n2 - Alfajor de maicena\n3 - Budin de limon\n4 - Salir`));
                switch (item) {
                    case 1:
                        
                        break;
                
                    default:
                        break;
                }
            }while(item !==4);
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            break;
    
        default:
            alert(`Opcion incorrecta`)
            break;
    }

}while(accion !== 4);