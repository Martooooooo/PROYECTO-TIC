import readlineSync from 'readline-sync';
import fs from 'fs';

// Leer los usuarios existentes desde el archivo JSON
let usuarios = JSON.parse(fs.readFileSync('infoUsuario.json', "utf-8"));

// Solicita el nombre de usuario y la contraseña
let nombre = readlineSync.question("Iniciar sesión - Nombre de usuario: ");
let password = readlineSync.question("Iniciar sesión - Contraseña: ", { hideEchoBack: true });

// Busca el usuario en la lista
let usuarioExistente = usuarios.find(u => u.nombre === nombre && u.contraseña === password);

if (usuarioExistente) {
    console.log("Inicio de sesión exitoso. ¡Bienvenido!");
} else { 
    console.log("Nombre de usuario o contraseña incorrectos.");
}