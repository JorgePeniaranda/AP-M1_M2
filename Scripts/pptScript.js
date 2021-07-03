function PiedraPapelTijera() {
    sessionStorage.setItem('opUser', opUser);
    location.reload();
}

var opUser;
var opciones = ["Piedra", "Papel", "Tijera"];
var userElecc = opciones[sessionStorage.getItem('opUser')];
var computerElecc = opciones[Math.round(Math.random() * 2)];


document.write('<section id="Resultado">');
if (userElecc == "Piedra" && computerElecc == "Papel") {
    document.write('<h1 class="Perdiste">Perdiste</h1>' + '<p>Elegiste "' + userElecc + '" y la Computadora eligio "' + computerElecc + '".<p>');
}
else if (userElecc == "Papel" && computerElecc == "Piedra") {
    document.write('<h1 class="Ganaste">Ganaste</h1>' + '<p>Elegiste "' + userElecc + '" y la Computadora eligio "' + computerElecc + '".<p>');
}
else if (userElecc == "Tijera" && computerElecc == "Piedra") {
    document.write('<h1 class="Perdiste">Perdiste</h1>' + '<p>Elegiste "' + userElecc + '" y la Computadora eligio "' + computerElecc + '".<p>');
}
else if (userElecc == "Piedra" && computerElecc == "Tijera") {
    document.write('<h1 class="Ganaste">Ganaste</h1>' + '<p>Elegiste "' + userElecc + '" y la Computadora eligio "' + computerElecc + '".<p>');
}
else if (userElecc == "Papel" && computerElecc == "Tijera") {
    document.write('<h1 class="Perdiste">Perdiste</h1>' + '<p>Elegiste "' + userElecc + '" y la Computadora eligio "' + computerElecc + '".<p>');
}
else if (userElecc == "Tijera" && computerElecc == "Papel") {
    document.write('<h1 class="Ganaste">Ganaste</h1>' + '<p>Elegiste "' + userElecc + '" y la Computadora eligio "' + computerElecc + '".<p>');
}
else if (userElecc == computerElecc) {
    document.write('<h1>Empate</h1>' + '<p>Elegiste "' + userElecc + '" y la Computadora eligio "' + computerElecc + '".<p>');
}
document.write('</section>');
sessionStorage.clear()