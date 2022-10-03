const pNode = document.getElementById("tituloAutor")

var autor = {
    nombre: "Nombre: Manuel Pablo",
    correo: "Email:  pabloramosaguilar11@hotmail.com"
};

const fechaescribir = document.getElementById("fecha");
pNode.innerText += "¡Saludos!";
const nombre1 = document.getElementById("nombre");
const correo1 = document.getElementById("correo");
nombre1.innerText += autor.nombre;
correo1.innerText += autor.correo;

let links = document.querySelectorAll("#fotoA");
links.forEach(function (link) {

    link.setAttribute("src", "tortuga.jpg");

});

/* Otra forma sería usar:
var img = document.createElement("img");
img.src = "autorOsuna.jpg";
var src = document.getElementById("fotoA");
src.appendChild(img);*/

let fecha = new Date();

let fechahoy = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();

fechaescribir.innerText += fechahoy;

function calcularFMC() {
    var fmc
    var edad
    var sexo
    var texto = document.getElementById("FMC");
    var articulo = document.getElementById("articulo");

    alert("¿Quieres saber tu FMC?");

    edad = prompt("¿Cuál es tu edad?");
    edad = parseInt(edad);
    estatura = prompt("¿Cuál es tu sexo? (hombre,mujer,otro)");

    

    fmc = 220 - edad;
    texto.innerHTML = "Tu FMC es: "+fmc;



    articulo.style.visibility = "visible";

}
