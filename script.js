var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var personaje = document.querySelector(".contenedorpersonaje");
var contenedor = document.querySelector(".contenedor-texto");
var resultado = document.querySelector(".resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    if (/^[a-z\s]+$/.test(cajatexto)) {
        resultado.textContent = encriptarTexto(cajatexto);
    } else {
        resultado.textContent = "Lo siento, no se puede encriptar en mayúsculas y/o con acentos.";
    }
}

function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    if (/^[a-z\s]+$/.test(cajatexto)) {
        resultado.textContent = desencriptarTexto(cajatexto);
    } else {
        resultado.textContent = "Lo siento, no se puede encriptar en mayúsculas y/o con acentos.";
    }
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante() {
    personaje.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var palabras = mensaje.split(' ');
    var textoFinal = "";

    for (var j = 0; j < palabras.length; j++) {
        var palabra = palabras[j];

        for (var i = 0; i < palabra.length; i++) {
            if (palabra[i] == "a") {
                textoFinal = textoFinal + "ai";
            } else if (palabra[i] == "e") {
                textoFinal = textoFinal + "enter";
            } else if (palabra[i] == "i") {
                textoFinal = textoFinal + "imes";
            } else if (palabra[i] == "o") {
                textoFinal = textoFinal + "ober";
            } else if (palabra[i] == "u") {
                textoFinal = textoFinal + "ufat";
            } else {
                textoFinal = textoFinal + palabra[i];
            }
        }

        if (j < palabras.length - 1) {
            textoFinal = textoFinal + " ";
        }
    }

    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var palabras = mensaje.split(' ');
    var textoFinal = "";

    for (var j = 0; j < palabras.length; j++) {
        var palabra = palabras[j];

        for (var i = 0; i < palabra.length; i++) {
            if (palabra[i] == "a") {
                textoFinal = textoFinal + "a"
		i = i+1;
            } else if (palabra[i] == "e") {
                textoFinal = textoFinal + "e";
                i = i + 4;
            } else if (palabra[i] == "i") {
                textoFinal = textoFinal + "i";
                i = i + 3;
            } else if (palabra[i] == "o") {
                textoFinal = textoFinal + "o";
                i = i + 3;
            } else if (palabra[i] == "u") {
                textoFinal = textoFinal + "u";
                i = i + 3;
            } else {
                textoFinal = textoFinal + palabra[i];
            }
        }

        if (j < palabras.length - 1) {
            textoFinal = textoFinal + " ";
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
});
