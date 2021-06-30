function contarDias() {
    var nombre = document.getElementById("nombre").value;

    var fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    var fechaActual = new Date();

    var anioNacimiento = fechaNacimiento.getFullYear();
    var anioactual = fechaActual.getFullYear();

    var edad = anioactual - anioNacimiento;
    var anioContador = 0, dias = 0;


    for (let contador = 0; contador < edad; contador++) {
        anioContador = anioactual - contador;

        if (((Math.trunc(anioContador / 4)) * 4) == anioContador) {
            dias = dias + 366;
        }
        else {
            dias = dias + 365;
        }
    }
    
    var diasdeMas = Math.trunc((fechaActual.getTime() - fechaNacimiento.getTime())/86400000);
    var diasdeMas = diasdeMas - dias; 
    dias = dias + diasdeMas;

    if (fechaNacimiento > fechaActual) {
        alert("No naciste aun -.-");
    }
    else if (document.getElementById("fechaNacimiento").value == "") {
        alert("Ingrese una fecha para continuar");
    }
    else if (nombre == "") {
        alert("Su edad es de "+ edad +" años, y ha vivido " + dias + " días.");
    }
    else if (nombre != "") {
        alert("Saludos " + nombre + ", Su edad es de "+ edad +" años, y ha vivido " + dias + " días.");
    }
}


/* Jorge Peñaranda */