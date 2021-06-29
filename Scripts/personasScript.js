function leercantidadPersonas() {
    sessionStorage.setItem('cantidadPersonasperoxD', (document.getElementById("cantidadPersonas").value));
    location.reload();
}

var numMaximo = 0,
    numMinima = 0,
    numPromedio = 0,
    numSumaPeso = 0;

var nombresLista = [
    "Jorge",
    "Juan",
    "Nicolas",
    "Ismael",
    "Marcelo",
    "Carlos",
    "Eugenio",
    "Pepe",
    "Pedro",
    "Mario",
    "Pablo",
    "Tadeo",
    "Manolo",
    "Juanito",
    "Eustacio",
    "Encarna",
    "Tobias",
    "Maria",
    "Marcela",
    "Pamela",
    "Mariela",
    "Sandra",
    "Paola",
    "Ben",
    "Laura",
    "Xeneise",
    "Maradona",
    "Loures",
    "Sofia",
    "Ariana",
];

var listaPersonas = [];


if (sessionStorage.getItem('cantidadPersonasperoxD') != null) {
    var cantidadPersonas = sessionStorage.getItem('cantidadPersonasperoxD');
}

function crearPersonas(cantidad) {
    for (var contadorP = 0; contadorP < cantidad; contadorP++) {
        var nombreRandom = nombresLista[Math.trunc(Math.random() * 30)];
        var edadRandom = Math.round(Math.random() * (80 - 18) + 18);
        var pesoRandom = Math.round(Math.random() * (120 - 50) + 50);

        listaPersonas.push(
            (window["datosPersona_" + contadorP] = {
                Nombre: nombreRandom,
                Edad: edadRandom,
                Peso: pesoRandom,
            })
        );
    }
}

function mostrarPersonas_Data() {
    for (var contador = 0; contador < listaPersonas.length; contador++) {
        var listaPersonas_temp = listaPersonas[contador];
        document.write(
            '<span style="font-weight: bold;">Persona ',
            contador + 1,
            ": </span><br>"
        );
        document.write("Nombre: ", listaPersonas_temp.Nombre, "<br>");
        document.write("Edad: ", listaPersonas_temp.Edad, " Años<br>");
        document.write("Peso: ", listaPersonas_temp.Peso, " kg<br>");
        document.write("<br>", "<br>");
    }
}

function busquedaNumMaximo(listaNMA) {
    numMaximo = listaNMA[0].Edad;

    for (var contadorMA = 0; contadorMA < listaNMA.length; contadorMA++) {
        if (numMaximo < listaNMA[contadorMA].Edad) {
            numMaximo = listaNMA[contadorMA].Edad;
        }
    }
}

function busquedaNumMinima(listaNMI) {
    numMinima = listaNMI[0].Edad;

    for (var contadorMI = 0; contadorMI < listaNMI.length; contadorMI++) {
        if (numMinima > listaNMI[contadorMI]["Edad"]) {
            numMinima = listaNMI[contadorMI]["Edad"];
        }
    }
}

function busquedaPromedio(listaP) {
    for (var contadorP = 0; contadorP < listaP.length; contadorP++) {
        numPromedio = numPromedio + listaP[contadorP]["Edad"];
    }
    numPromedio = numPromedio / listaP.length;
}

// Busqueda del Total Peso

function busquedaSumaTotal(listaP) {
    for (var contadorSP = 0; contadorSP < listaP.length; contadorSP++) {
        numSumaPeso = numSumaPeso + listaP[contadorSP].Peso;
    }
}

crearPersonas(cantidadPersonas);
busquedaNumMaximo(listaPersonas);
busquedaNumMinima(listaPersonas);
busquedaPromedio(listaPersonas);
busquedaSumaTotal(listaPersonas);



document.write('<hr><section id="seccionPersonas">')

document.write('<div id="listaPersonas">')
document.write("<h3>Lista de Personas:</h3>");
mostrarPersonas_Data();
document.write("</div>")


document.write('<div id="datosPersonas">')
document.write("<h3>Datos:</h3>");

document.write("Edad Máxima: " + numMaximo + " Años<br>");
document.write("Edad Mínima: " + numMinima + " Años<br>");
document.write(
    "Aproximado de Edad Promedio: " + Math.round(numPromedio) + " Años<br>"
);
document.write("Suma de Todos los Pesos: " + numSumaPeso + "kg<br><br>");
document.write("</div>")
document.write("</section>")
sessionStorage.clear()


/* Jorge Peñaranda */