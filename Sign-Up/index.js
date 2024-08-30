import readLineSync from 'readline-sync';
import fs from 'fs';

    let name = parseInt(readLineSync.question("Nombre de usuario:"))
    let password = parseInt(readLineSync.question("Contraseña:"))

        let usuarios = JSON.parse(fs.readFileSync('../infoUsuario.json', "utf-8"))

        let usuario = {
            nombre: name,
            contraseña: password
        };

        usuarios.push(usuario)
        (fs.writeFileSync('../infoUsuario.json', JSON.stringify(usuario)))