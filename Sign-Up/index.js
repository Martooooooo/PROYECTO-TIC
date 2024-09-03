import readLineSync from 'readline-sync';
import fs from 'fs';

// Leer los usuarios existentes desde el archivo JSON
let usuarios = JSON.parse(fs.readFileSync('infoUsuario.json', "utf-8"));

// Registrar un nuevo usuario
let nombre = readLineSync.question("Nombre de usuario: ");
let password = readLineSync.question("Contraseña: ", { hideEchoBack: true });

// Verifica si el usuario ya existe
let usuarioExistente = usuarios.find(u => u.nombre === nombre);

if (usuarioExistente) {
    console.log("El usuario ya existe. Intenta con otro nombre de usuario.");
} else {
    let usuario = {
        nombre: nombre,
        contraseña: password
    };

    usuarios.push(usuario);
    fs.writeFileSync('infoUsuario.json', JSON.stringify(usuarios, null, 2));
    console.log("Usuario registrado exitosamente.");


// Iniciar sesión
nombre = readLineSync.question("Iniciar sesión - Nombre de usuario: ");
password = readLineSync.question("Iniciar sesión - Contraseña: ", { hideEchoBack: true });

// Busca el usuario en la lista
usuarioExistente = usuarios.find(u => u.nombre === nombre && u.contraseña === password);

if (usuarioExistente) {
    console.log("Inicio de sesión exitoso. ¡Bienvenido!");
} else { console.log("Nombre de usuario o contraseña incorrectos.")};
}

