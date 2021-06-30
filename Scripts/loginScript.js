
var Usuarios = [], Contrasenias = [];

function Login() {
    var user = document.getElementById("UserLogin").value;
    var pass = document.getElementById("PasswordLogin").value;
    if (user == "") {
        alert("Ingrese el usuario para continuar");
        return
    }
    else if (pass == "") {
        alert("Ingrese la contraseña para continuar");
        return
    }
    else if (Usuarios.indexOf(user) != -1 && pass == Contrasenias[Usuarios.indexOf(user)]) {
        alert(user + ", Se ha logueado correctamente!");
    }
    else if (Usuarios.indexOf(user) == -1) {
        alert("El usuario no existe");
    }
    else if (pass != Contrasenias[Usuarios.indexOf(user)]){
        alert("Contraseña Incorrecta");
    }
}

function Register() {
    var user = document.getElementById("UserRegister").value;
    var pass = document.getElementById("PasswordRegister").value;

    if (user == "") {
        alert("Ingrese el usuario para continuar");
        return
    }
    else if (pass == "") {
        alert("Ingrese la contraseña para continuar");
        return
    }
    else if (Usuarios.indexOf(user) == -1) {
        alert("El usuario se a creado excitosamente");
        Usuarios.push(user)
        Contrasenias.push(pass)
    }
    else if (Usuarios.indexOf(user) != -1) {
        alert("El usuario ya existe ingrese otro");
    }
    document.getElementById("UserRegister").value = "";
    document.getElementById("PasswordRegister").value = "";
}


/* Jorge Peñaranda */