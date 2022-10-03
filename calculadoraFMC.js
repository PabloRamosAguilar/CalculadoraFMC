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
    var texto = document.getElementById("FMC");
    var articulo = document.getElementById("articulo");

    alert("¿Quieres saber tu FMC?");

    edad = prompt("¿Cuál es tu edad?");
    edad = parseInt(edad);
    estatura = prompt("¿Cuál es tu sexo? (hombre,mujer,otro)");

    

    fmc = 220 - edad;
    texto.innerHTML = "Tu FMC es: "+fmc;
    texto.innerHTML += "<br/>Zona de recuperación (60%-70%): "+parseInt(fmc*0.6)+"-"+parseInt(fmc*0.7);
    texto.innerHTML += "<br/>Zona aeróbica (70%-80%): "+parseInt(fmc*0.7)+"-"+parseInt(fmc*0.8);
    texto.innerHTML += "<br/>Zona anaeróbica (80%-90%): "+parseInt(fmc*0.8)+"-"+parseInt(fmc*0.9);
    texto.innerHTML += "<br/>Línea Roja (90%-100%): "+parseInt(fmc*0.9)+"-"+fmc;



    articulo.style.visibility = "visible";

}
