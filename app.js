// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (validarNombre(nombre)) {
        amigos.push(nombre);
        document.getElementById("amigo").value = ""; //Limpiar el campo de entrada
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function validarNombre(nombre) {
    return nombre.trim() !== "";
}