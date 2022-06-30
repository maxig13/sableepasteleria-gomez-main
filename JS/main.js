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
}